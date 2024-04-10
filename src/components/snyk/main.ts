import { Component, javascript, python, java, cdk } from "projen";
import * as constants from "../../constants";
import { Envrc } from "../envrc";
import { SeverityThreshold } from "./enums"
import {
  SecurityScanWorkflow,
  SecurityScanWorkflowOptions,
} from "./security-scan-workflow";
import { SnykScaWorkflowOptions, SnykScaWorkflow } from "./sca-workflow";
import { SnykSastWorkflowOptions, SnykSastWorkflow } from "./sast-workflow";

export interface SnykComponentOptions {
  readonly snykOrgId: string;
  readonly snykMonitoredProjectId: string;

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
    options: SnykComponentOptions
  ) {
    super(project);
    this.snykWorkflowName = options?.workflowName ?? "snyk-scans";
    this.enableSca = options?.enableSca ?? true;
    this.enableSast = options?.enableSast ?? true;

    new Envrc(project, ".envrc");
    project.gitignore.exclude(".bin/");

    const installSnykTask = project.addTask("install:snyk");
    installSnykTask.exec("mkdir -p .bin");
    installSnykTask.exec("yarn global add snyk snyk-delta");
    installSnykTask.exec(
      `wget -O ./.bin/snyk-pr-diff https://github.com/snyk-playground/cx-tools/raw/${constants.DEFAULT_SNYK_PR_DIFF_VERSION}`
    );
    installSnykTask.exec("chmod +x ./.bin/snyk-pr-diff");

    project.addTask("sca", {
      receiveArgs: true,
      exec: `snyk test --prune-repeated-subdependencies --severity-threshold=${SeverityThreshold.High}`,
    });

    if (this.enableSca || this.enableSast) {
      const securityWorkflow: SecurityScanWorkflow = new SecurityScanWorkflow(
        project,
        this.snykWorkflowName,
        {}
      );
      if (this.enableSca) {
        const snykScaWorkflowOptions: SnykScaWorkflowOptions = {
          orgId: options.snykOrgId,
          runSnykScaWithDeltaOptions: {
            snykMonitoredProjectId: options.snykMonitoredProjectId,
            authenticateSnykOptions: {
              snykOrgId: options.snykOrgId,
            }
          },
          ...options?.snykScaWorkflowOptions,
        };
        const snykScaWorkflow = new SnykScaWorkflow(
          project,
          snykScaWorkflowOptions
        );
        const snykScaWorkflowPath = snykScaWorkflow?.workflow?.file?.path;

        if (snykScaWorkflowPath === undefined) {
          throw Error(
            "SnykSca workflow file was not created successfully. Unable to add snyk sca job in the main workflow"
          );
        }

        // call sca workflow from the main workflow
        securityWorkflow.callReusableWorkflow("run-sca", snykScaWorkflowPath);
      }
      if (this.enableSast) {
        const snykSastWorkflowOptions: SnykSastWorkflowOptions = {
          orgId: options.snykOrgId,
          ...options.snykSastWorkflowOptions,
        };
        const snykSastWorkflow = new SnykSastWorkflow(
          project,
          snykSastWorkflowOptions
        );
        const snykSastWorkflowPath = snykSastWorkflow?.workflow?.file?.path;

        if (snykSastWorkflowPath === undefined) {
          throw Error(
            "Snyk SAST workflow file was not created successfully. Unable to add snyk sast job in the main workflow"
          );
        }
        // call sast workflow from the main workflow
        securityWorkflow.callReusableWorkflow("run-sast", snykSastWorkflowPath);
      }
    }
  }
}
