import { Job } from "projen/lib/github/workflows-model";
import { GithubWorkflowOptions } from "projen/lib/github";
import { InstallSnykOptions, SetupNodeOptions } from "./steps";

// https://docs.github.com/en/actions/using-workflows/reusing-workflows
export interface SnykReusableWorkflowOptions {
  readonly orgId: string;
  readonly workflowName?: string;
  readonly workflowOptions?: GithubWorkflowOptions;
  readonly jobId?: string;
  readonly jobOptions?: Partial<Job>;
  readonly setupNodeOptions?: SetupNodeOptions;
  readonly installSnykOptions?: InstallSnykOptions;
}
