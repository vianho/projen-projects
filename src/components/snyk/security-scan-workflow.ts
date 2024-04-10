import { Component, javascript, python, java, cdk } from 'projen';
import { GithubWorkflow, GithubWorkflowOptions } from 'projen/lib/github';
import {
  JobCallingReusableWorkflow,
  JobPermission,
  JobPermissions,
  Triggers,
} from 'projen/lib/github/workflows-model';

export interface SecurityScanWorkflowOptions {
  readonly triggersOptions?: Triggers;
  readonly workflowOptions?: GithubWorkflowOptions;
}

export class SecurityScanWorkflow extends Component {
  public readonly workflow: GithubWorkflow | undefined;

  constructor(
    project:
    | javascript.NodeProject
    | python.PythonProject
    | java.JavaProject
    | cdk.JsiiProject,
    name: string,
    options?: SecurityScanWorkflowOptions,
  ) {
    super(project);

    if (!project.github) {
      return;
    }

    const triggers: Triggers = options?.triggersOptions ?? {
      push: {
        branches: ['main'],
      },
      workflowDispatch: {},
    };

    this.workflow = new GithubWorkflow(
      project.github,
      name,
      options?.workflowOptions,
    );
    this.workflow.on(triggers);
  }

  callReusableWorkflow(id: string, path: string, permissions?: JobPermissions) {
    const jobPermissions = permissions ?? {
      contents: JobPermission.READ,
    };
    const jobCallingReusableWorkflow: JobCallingReusableWorkflow = {
      uses: path,
      permissions: jobPermissions,
    };

    this.workflow?.addJob(id, jobCallingReusableWorkflow);
  }
}
