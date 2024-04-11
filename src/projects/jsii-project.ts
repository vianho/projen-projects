import { cdk } from 'projen';
import { SnykComponent, SnykComponentOptions } from '../components/snyk';

export interface JSIIProjectOptions extends cdk.JsiiProjectOptions {
  readonly snykOptions?: SnykComponentOptions;
}

/**
 * JSII project
 * @pjid jsii
 */
export class JSIIProject extends cdk.JsiiProject {
  constructor(options: JSIIProjectOptions) {
    super({
      ...options,
    });

    new SnykComponent(this, options?.snykOptions ?? {});
    this.npmignore?.exclude('.bin');
  }
}
