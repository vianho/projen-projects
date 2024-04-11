import { typescript } from 'projen';
import { SnykComponent, SnykComponentOptions } from '../components/snyk';

export interface TypescriptProjectOptions
  extends typescript.TypeScriptProjectOptions {
  readonly snykOptions?: SnykComponentOptions;
}

/**
 * TypeScript project
 * @pjid ts
 */
export class TypescriptProject extends typescript.TypeScriptProject {
  constructor(options: TypescriptProjectOptions) {
    super({
      ...options,
    });

    new SnykComponent(this, options?.snykOptions ?? {});
    this.npmignore?.include('dist');
    this.npmignore?.exclude('.bin');
  }
}
