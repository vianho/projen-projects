import {
  filteredRunsOnOptions,
  Component,
  javascript,
  python,
  java,
  cdk,
} from 'projen';
import {
  GithubWorkflow,
  CheckoutOptions,
  UploadArtifactOptions,
  DownloadArtifactOptions,
} from 'projen/lib/github';
import { JobPermission, JobStep } from 'projen/lib/github/workflows-model';
import { SnykReusableWorkflowOptions } from './snyk-reusable-workflow-options';
import {
  AuthenticateSnykOptions,
  InstallSnykPrDiffOptions,
  RunSnykSastOptions,
  SnykWorkflowSteps,
} from './steps';

export interface SnykSastWorkflowOptions extends SnykReusableWorkflowOptions {
  readonly authenticateSnykOptions: AuthenticateSnykOptions;
  readonly delta?: boolean;
  readonly installSnykPrDiffOptions?: InstallSnykPrDiffOptions;
  readonly checkoutBaselineOptions?: CheckoutOptions;
  readonly checkoutCurrentOptions?: CheckoutOptions;
  readonly uploadArtifactOptions?: UploadArtifactOptions;
  readonly downloadArtifactOptions?: DownloadArtifactOptions;
  readonly runSnykSastBaselineOptions?: RunSnykSastOptions;
  readonly runSnykSastCurrentOptions?: RunSnykSastOptions;
}

// trigger on workflow call
export class SnykSastWorkflow extends Component {
  public readonly workflow: GithubWorkflow | undefined;

  constructor(
    project:
    | javascript.NodeProject
    | python.PythonProject
    | java.JavaProject
    | cdk.JsiiProject,
    options: SnykSastWorkflowOptions,
  ) {
    super(project);

    if (!project.github) {
      return;
    }

    const workflowName = options.workflowName ?? 'snyk-sast';
    const jobId = options?.jobId ?? 'sast-scan';
    const jobName = options?.jobOptions?.name ?? 'Run SAST Scan with Snyk';

    // default options
    const checkoutBaselineOptions: CheckoutOptions = {
      name: 'Checkout baseline',
      id: 'checkout-baseline',
      with: {
        ref: '${{ github.event.before }}',
      },
      ...(options?.checkoutBaselineOptions ?? {}),
    };
    const checkoutCurrentOptions: CheckoutOptions = {
      name: 'Checkout current branch',
      id: 'checkout-current',
      with: {
        ref: '${{ github.event.after }}',
      },
      ...(options?.checkoutCurrentOptions ?? {}),
    };

    const runSnykSastBaselineOptions: RunSnykSastOptions = {
      name: 'Run snyk code on baseline branch',
      id: 'snyk-sast-baseline',
      continueOnError: true,
      authenticateSnykOptions: options.authenticateSnykOptions,
      ...(options?.runSnykSastBaselineOptions ?? {}),
    };
    const runSnykSastCurrentOptions: RunSnykSastOptions = {
      name: 'Run snyk code on current branch',
      id: 'snyk-sast-current',
      authenticateSnykOptions: options.authenticateSnykOptions,
      ...(options?.runSnykSastCurrentOptions ?? {}),
      continueOnError: false,
    };

    const uploadArtifactOptions: UploadArtifactOptions = {
      name: 'Upload Baseline Result',
      id: 'upload-baseline-result',
      with: {
        name: `\${{ steps.${runSnykSastBaselineOptions.id}.outputs.result-path }}`,
        path: `\${{ steps.${runSnykSastBaselineOptions.id}.outputs.result-path }}`,
        retentionDays: 1,
        ifNoFilesFound: 'error',
      },
      ...(options?.uploadArtifactOptions ?? {}),
    };
    const downloadArtifactOptions: DownloadArtifactOptions = {
      name: 'Download Baseline Result',
      id: 'download-baseline-result',
      with: {
        path: `\${{ steps.${runSnykSastBaselineOptions.id}.outputs.result-path }}`,
      },
      ...(options?.downloadArtifactOptions ?? {}),
    };

    project.logger.info(`📝 Generating ${workflowName} workflow...`);
    this.workflow = new GithubWorkflow(
      project.github,
      workflowName,
      options.workflowOptions,
    );
    this.workflow.on({
      workflowCall: {},
      workflowDispatch: {},
    });

    // partial steps for delta
    const runBaselineScanSteps: JobStep[] = [
      SnykWorkflowSteps.checkout(checkoutBaselineOptions),
      ...SnykWorkflowSteps.runSnykSast(runSnykSastBaselineOptions),
      SnykWorkflowSteps.uploadArtifact(uploadArtifactOptions),
    ];
    const runPrDiffSteps: JobStep[] = [
      SnykWorkflowSteps.downloadArtifact(downloadArtifactOptions),
      ...SnykWorkflowSteps.runSnykPrDiff({
        snykCodeBaselinePath: `\${{ steps.${runSnykSastBaselineOptions.id}.outputs.result-path }}`,
        snykCodeCurrentPath: `\${{ steps.${runSnykSastCurrentOptions.id}.outputs.result-path }}`,
        continueOnError: false,
      }),
    ];

    this.workflow.addJob(jobId, {
      name: jobName,
      permissions: options?.jobOptions?.permissions ?? {
        contents: JobPermission.READ,
      },
      steps: [
        ...SnykWorkflowSteps.setupNode(options?.setupNodeOptions ?? {}),
        ...SnykWorkflowSteps.installSnyk(options?.installSnykOptions ?? {}),
        ...SnykWorkflowSteps.installSnykPrDiff(
          options?.installSnykPrDiffOptions ?? {}
        ),
        ...(options?.delta ? runBaselineScanSteps : []),
        SnykWorkflowSteps.checkout(checkoutCurrentOptions),
        ...SnykWorkflowSteps.runSnykSast(runSnykSastCurrentOptions),
        ...(options?.delta ? runPrDiffSteps : []),
      ],
      ...(options?.jobOptions ?? {}),
      ...filteredRunsOnOptions(
        options?.jobOptions?.runsOn,
        options?.jobOptions?.runsOnGroup
      ),
    });
    project.logger.info(`✅ Done generating ${workflowName} workflow...`);
  }
}
