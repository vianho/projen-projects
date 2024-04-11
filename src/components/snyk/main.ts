import { Component, javascript, python, java, cdk } from 'projen';
import { SeverityThreshold } from './enums';
import { SnykSastWorkflowOptions, SnykSastWorkflow } from './sast-workflow';
import { SnykScaWorkflowOptions, SnykScaWorkflow } from './sca-workflow';
import {
  SecurityScanWorkflow,
  SecurityScanWorkflowOptions,
} from './security-scan-workflow';
import { AuthenticateSnykOptions } from './steps';
import * as constants from '../../constants';
import { getRepoNameFromGitConfig } from '../../utils';
import { Envrc } from '../envrc';

export interface SnykComponentOptions {
  readonly snykOrgId?: string;
  readonly snykMonitoredProjectId?: string;

  readonly workflowName?: string;
  readonly securityScanWorkflowOptions?: SecurityScanWorkflowOptions;
  readonly enableSca?: boolean;
  readonly snykScaWorkflowOptions?: SnykScaWorkflowOptions;
  readonly enableSast?: boolean;
  readonly snykSastWorkflowOptions?: SnykSastWorkflowOptions;
}

export class SnykComponent extends Component {
  public readonly snykWorkflowName: string;
  public readonly enableSca: boolean;
  public readonly enableSast: boolean;

  constructor(
    project:
    | javascript.NodeProject
    | python.PythonProject
    | java.JavaProject
    | cdk.JsiiProject,
    options: SnykComponentOptions,
  ) {
    super(project);
    this.snykWorkflowName = options?.workflowName ?? 'snyk-scans';
    this.enableSca = options?.enableSca ?? true;
    this.enableSast = options?.enableSast ?? true;
    const snykOrgId = options?.snykOrgId ?? constants.DEFAULT_SNYK_ORG;
    const snykMonitoredProjectId =
      options?.snykMonitoredProjectId ??
      constants.DEFAULT_SNYK_MONITORED_PROJECT_ID;
    const authenticateSnykOptions: AuthenticateSnykOptions = {
      snykOrgId: snykOrgId,
    };

    new Envrc(project, '.envrc');
    project.gitignore.exclude('.bin/');

    const installSnykTask = project.addTask('install:snyk');
    installSnykTask.exec('mkdir -p .bin');
    installSnykTask.exec('yarn global add snyk snyk-delta');
    installSnykTask.exec(
      `wget -O ./.bin/snyk-pr-diff https://github.com/snyk-playground/cx-tools/raw/${constants.DEFAULT_SNYK_PR_DIFF_VERSION}`,
    );
    installSnykTask.exec('chmod +x ./.bin/snyk-pr-diff');

    project.addTask('sca', {
      receiveArgs: true,
      exec: `snyk test --prune-repeated-subdependencies --severity-threshold=${SeverityThreshold.HIGH}`,
    });

    if (this.enableSca || this.enableSast) {
      const securityWorkflow: SecurityScanWorkflow = new SecurityScanWorkflow(
        project,
        this.snykWorkflowName,
        {},
      );
      const repoName:string = getRepoNameFromGitConfig(process.cwd());
      if (this.enableSca) {
        const snykScaWorkflowOptions: SnykScaWorkflowOptions = {
          runSnykScaWithDeltaOptions: {
            snykMonitoredProjectId: snykMonitoredProjectId,
            authenticateSnykOptions: authenticateSnykOptions,
          },
          ...(options?.snykScaWorkflowOptions ?? {}),
        };
        const snykScaWorkflow = new SnykScaWorkflow(
          project,
          snykScaWorkflowOptions,
        );
        const relativeWorkflowPath = snykScaWorkflow?.workflow?.file?.path;

        if (relativeWorkflowPath === undefined) {
          throw Error(
            'SnykSca workflow file was not created successfully. Unable to add snyk sca job in the main workflow',
          );
        }

        // call sca workflow from the main workflow
        const reusableWorkflowPath = repoName + '/' + relativeWorkflowPath;
        securityWorkflow.callReusableWorkflow('run-sca', reusableWorkflowPath);
      }
      if (this.enableSast) {
        const snykSastWorkflowOptions: SnykSastWorkflowOptions = {
          authenticateSnykOptions: authenticateSnykOptions,
          ...(options?.snykSastWorkflowOptions ?? {}),
        };
        const snykSastWorkflow = new SnykSastWorkflow(
          project,
          snykSastWorkflowOptions,
        );
        const relativeWorkflowPath = snykSastWorkflow?.workflow?.file?.path;

        if (relativeWorkflowPath === undefined) {
          throw Error(
            'Snyk SAST workflow file was not created successfully. Unable to add snyk sast job in the main workflow',
          );
        }
        // call sast workflow from the main workflow
        const reusableWorkflowPath = repoName + '/' + relativeWorkflowPath;
        securityWorkflow.callReusableWorkflow('run-sast', reusableWorkflowPath);
      }
    }
  }
}
