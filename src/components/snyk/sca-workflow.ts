import {
  filteredRunsOnOptions,
  Component,
  javascript,
  python,
  java,
  cdk,
} from "projen";
import { GithubWorkflow } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";
import { RunSnykScaWithDeltaOptions, SnykWorkflowSteps } from "./steps";
import { SnykReusableWorkflowOptions } from "./snyk-reusable-workflow-options";

export interface SnykScaWorkflowOptions extends SnykReusableWorkflowOptions {
  readonly runSnykScaWithDeltaOptions: RunSnykScaWithDeltaOptions;
}

// trigger on workflow call
export class SnykScaWorkflow extends Component {
  public readonly workflow: GithubWorkflow | undefined;

  constructor(
    project:
      | javascript.NodeProject
      | python.PythonProject
      | java.JavaProject
      | cdk.JsiiProject,
    options: SnykScaWorkflowOptions
  ) {
    super(project);

    if (!project.github) {
      return;
    }

    const workflowName = options.workflowName ?? "snyk-sca";
    const jobName: string = options?.jobOptions?.name ?? "sca-scan";

    project.logger.info(`📝 Generating ${workflowName} workflow...`);
    this.workflow = new GithubWorkflow(
      project.github,
      workflowName,
      options.workflowOptions
    );
    this.workflow.on({
      workflowCall: {},
      workflowDispatch: {},
    });

    this.workflow.addJob(jobName, {
      name: jobName,
      permissions: {
        contents: JobPermission.READ,
      },
      steps: [
        SnykWorkflowSteps.checkout(),
        ...SnykWorkflowSteps.setupNode(options?.setupNodeOptions ?? {}),
        ...SnykWorkflowSteps.installSnyk(options?.installSnykOptions ?? {}),
        ...SnykWorkflowSteps.runSnykScaWithDelta(options.runSnykScaWithDeltaOptions),
      ],
      ...(options.jobOptions ?? {}),
      ...filteredRunsOnOptions(
        options?.jobOptions?.runsOn,
        options?.jobOptions?.runsOnGroup
      ),
    });

    project.logger.info(`✅ Done generating ${workflowName} workflow...`);
  }
}
