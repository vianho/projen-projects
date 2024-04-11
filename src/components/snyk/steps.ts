import { WorkflowSteps } from 'projen/lib/github';
import {
  JobStep,
  JobStepConfiguration,
} from 'projen/lib/github/workflows-model';
import { SeverityThreshold } from './enums';
import * as constants from '../../constants';

export class SnykWorkflowSteps extends WorkflowSteps {
  public static setupNode(options?: SetupNodeOptions): JobStep[] {
    const nodeVersion = options?.nodeVersion ?? 20;
    return [
      {
        name: options?.name ?? `Setup node ${nodeVersion}`,
        id: options?.id ?? `setup-node${nodeVersion}`,
        uses: 'actions/setup-node@v4',
        with: {
          'node-version': nodeVersion,
        },
      },
    ];
  }

  public static getNpmRoot(options?: JobStepConfiguration): JobStep[] {
    return [
      {
        name: options?.name ?? 'Get npm global installation root folder',
        id: options?.id ?? 'get-npm-root',
        run: this.multiLineCommands([
          'NPM_ROOT_LIBS=$(npm root -g)',
          "NPM_ROOT=$(echo $NPM_ROOT_LIBS | sed 's//lib/node_modules//')",
          'echo "npm-root-global-libs=$NPM_ROOT_LIBS"',
          'echo "path=$NPM_ROOT"',
          'echo path=$NPM_ROOT >> $GITHUB_OUTPUT',
        ]),
      },
    ];
  }

  public static createCache(options: CreateCacheOptions): JobStep[] {
    return [
      {
        name: options?.name ?? 'Create cache',
        id: options?.id ?? 'create-cache',
        uses: 'actions/cache@v4',
        with: options.with,
      },
    ];
  }

  public static installSnyk(options: InstallSnykOptions): JobStep[] {
    const cache = options?.cache ?? true;
    const name = options?.name ?? 'Install snyk and snyk-delta';
    const id = options?.id ?? 'install-snyk';
    const snykVersion = options?.snykVersion ?? constants;
    const snykDeltaVersion = options?.snykDeltaVersion ?? constants;
    const getNpmRootJobId: string = 'get-npm-root';
    const createCacheOptions: CreateCacheOptions = {
      name: 'Cache global npm folder',
      id: 'cache-npmg',
      with: {
        path: `\${{ steps.${getNpmRootJobId}.outputs.path }}`,
        key: '${{ runner.os }}-npm-global-snyk-${{ hashFiles(\'.projenrc.ts\') }}',
      },
      ...(options.createCacheOptions ?? {}),
    };

    if (cache) {
      return [
        ...this.getNpmRoot({ id: getNpmRootJobId }),
        ...this.createCache(createCacheOptions),
        {
          name: name,
          id: id,
          if: `steps.${createCacheOptions.id}.outputs.cache-hit != 'true'`,
          run: `npm i -g snyk@${snykVersion} snyk-delta@${snykDeltaVersion}`,
        },
      ];
    }
    return [
      {
        name: name,
        id: id,
        run: `npm i -g snyk@${snykVersion} snyk-delta@${snykDeltaVersion}`,
      },
    ];
  }

  public static installSnykPrDiff(
    options: InstallSnykPrDiffOptions,
  ): JobStep[] {
    const cache = options?.cache ?? true;
    const name = options?.name ?? 'Install snyk-pr-diff';
    const id = options?.id ?? 'install-snyk-pr-diff';
    const version = options?.version ?? constants.DEFAULT_SNYK_PR_DIFF_VERSION;
    const path = '/usr/local/bin/snyk-pr-diff';

    const createCacheOptions: CreateCacheOptions = {
      name: 'Create cache for snyk-pr-diff',
      id: 'cache-snyk-pr-diff',
      with: {
        path: path,
        key: '${{ runner.os }}-snyk-pr-diff-${{ hashFiles(".projenrc.ts") }}',
      },
      ...(options.createCacheOptions ?? {}),
    };

    const installSnykPrDiffCommand = this.multiLineCommands([
      `wget -O snyk-pr-diff https://github.com/snyk-playground/cx-tools/raw/${version}`,
      'chmod +x ./snyk-pr-diff',
      `mv ./snyk-pr-diff ${path}`,
      'which snyk-pr-diff',
    ]);
    if (cache) {
      return [
        ...this.createCache(createCacheOptions),
        {
          name: name,
          id: id,
          if: `steps.${createCacheOptions.id}.outputs.cache-hit != 'true'`,
          run: installSnykPrDiffCommand,
        },
      ];
    }
    return [
      {
        name: name,
        id: id,
        run: installSnykPrDiffCommand,
      },
    ];
  }

  public static authenticateSnyk(options: AuthenticateSnykOptions): JobStep[] {
    return [
      {
        name: options?.name ?? 'Authenticate Snyk',
        id: options?.id ?? 'snyk-auth',
        run: this.multiLineCommands([
          'snyk auth $SNYK_TOKEN',
          `snyk config set org=${options.snykOrgId}`,
        ]),
        env: {
          SNYK_TOKEN: options.snykToken ?? constants.DEFAULT_SNYK_TOKEN,
        },
      },
    ];
  }

  public static runSca(options?: RunScaOptions): JobStep[] {
    const severityThreshold =
      options?.severityThreshold ?? SeverityThreshold.HIGH;
    const resultPathOutputId = options?.resultPathOutputId ?? 'result-path';
    const args = options?.args ?? '';

    return [
      {
        name: options?.name ?? 'Run snyk test',
        id: options?.id ?? 'sca-scan',
        run: this.multiLineCommands([
          'RESULT_PATH=${{ github.workspace }}/snyk_sca_result_${{ github.sha }}.json',
          `snyk test --prune-repeated-subdependencies --severity-threshold=${severityThreshold} --json-file-output=$RESULT_PATH ${args}`,
          `echo ${resultPathOutputId}=$RESULT_PATH >> $GITHUB_OUTPUT`,
        ]),
        continueOnError: true,
      },
    ];
  }

  public static runSnykScaWithDelta(
    options: RunSnykScaWithDeltaOptions,
  ): JobStep[] {
    const delta = options?.delta ?? true;
    const runScaOptions = {
      id: 'sca-scan',
      resultPathOutputId: 'result-path',
      ...(options?.runScaOptions ?? {}),
    };
    const steps = [
      ...this.authenticateSnyk(options.authenticateSnykOptions),
      ...this.runSca(options?.runScaOptions ?? {}),
    ];
    const snykOrgId = options.authenticateSnykOptions.snykOrgId;
    const snykMonitoredProjectId = options.snykMonitoredProjectId;
    const debug = options?.debug ?? true;

    if (delta) {
      if (
        snykMonitoredProjectId === undefined ||
        snykMonitoredProjectId === ''
      ) {
        throw Error(
          'snykMonitoredProjectId cannot be undefined or empty when delta is true',
        );
      }
      const scaScanResultPath = `\${{ steps.${runScaOptions.id}.outputs.${runScaOptions.resultPathOutputId} }}`;
      return [
        ...steps,
        {
          name: options?.name ?? 'Run snyk test with delta',
          id: options?.id ?? 'sca-scan-with-delta',
          run: `cat ${scaScanResultPath}  | snyk-delta --baselineOrg ${snykOrgId} --baselineProject ${snykMonitoredProjectId} ${
            debug ? '-d' : ''
          }`,
        },
      ];
    }
    return steps;
  }

  public static runSnykSast(options: RunSnykSastOptions): JobStep[] {
    const severityThreshold =
      options?.severityThreshold ?? SeverityThreshold.HIGH;
    const continueOnError = options?.continueOnError ?? true;
    return [
      ...this.authenticateSnyk(options.authenticateSnykOptions),
      {
        name: options?.name ?? 'Run snyk code test',
        id: options?.id ?? 'run-snyk-sast',
        run: this.multiLineCommands([
          "SHA=$(git log -1 '--format=format:%H')",
          'RESULT_PATH="${{ github.workspace }}/snyk_code_result_$SHA.json"',
          `snyk code test --severity-threshold=${severityThreshold} --json > $RESULT_PATH`,
          'echo "result-path=$RESULT_PATH" >> $GITHUB_OUTPUT',
        ]),
        continueOnError: continueOnError,
      },
    ];
  }

  public static runSnykPrDiff(options: RunSnykPrDiffOptions): JobStep[] {
    const continueOnError = options?.continueOnError ?? true;
    return [
      {
        name: options?.name ?? 'Run snyk-code-pr-diff',
        id: options?.id ?? 'run-snyk-code-pr-diff',
        run: `snyk-pr-diff code ${options.snykCodeBaselinePath} ${options.snykCodeCurrentPath}`,
        continueOnError: continueOnError,
      },
    ];
  }

  private static multiLineCommands = (
    commands: string[],
    delimiter: string = '\n',
  ): string => {
    return commands.join(delimiter);
  };
}

export interface SetupNodeOptions extends JobStepConfiguration {
  readonly nodeVersion?: number;
}

export interface CreateCacheOptions extends JobStepConfiguration {
  readonly with: CreateCacheWithOptions;
}

// https://github.com/actions/cache/blob/main/action.yml
export interface CreateCacheWithOptions {
  readonly path: string;
  readonly key: string;
  readonly restoreKeys?: string;
  readonly uploadChunkSize?: string;
  readonly enableCrossOsArchive?: boolean;
  readonly failOnCacheMiss?: boolean;
  readonly lookupOnly?: boolean;
  readonly saveAlways?: boolean;
}

export interface InstallSnykOptions extends JobStepConfiguration {
  readonly cache?: boolean;
  readonly snykVersion?: string;
  readonly snykDeltaVersion?: string;
  readonly createCacheOptions?: CreateCacheOptions;
}

export interface InstallSnykPrDiffOptions extends JobStepConfiguration {
  readonly cache?: boolean;
  readonly version?: string;
  readonly createCacheOptions?: CreateCacheOptions;
}

export interface AuthenticateSnykOptions extends JobStepConfiguration {
  readonly snykOrgId: string;
  readonly snykToken?: string;
}

export interface RunScaOptions extends JobStepConfiguration {
  readonly severityThreshold?: string;
  readonly resultPathOutputId?: string;
  readonly args?: string;
}

export interface RunSnykScaWithDeltaOptions extends JobStepConfiguration {
  readonly authenticateSnykOptions: AuthenticateSnykOptions;
  readonly snykMonitoredProjectId: string;
  readonly severityThreshold?: string;
  readonly delta?: boolean;
  readonly debug?: boolean;
  readonly runScaOptions?: RunScaOptions;
}

export interface RunSnykSastOptions extends JobStepConfiguration {
  readonly authenticateSnykOptions: AuthenticateSnykOptions;
  readonly severityThreshold?: string;
}

export interface RunSnykPrDiffOptions extends JobStepConfiguration {
  readonly snykCodeBaselinePath: string;
  readonly snykCodeCurrentPath: string;
}
