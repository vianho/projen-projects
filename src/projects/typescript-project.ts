import { typescript } from "projen";
import { SnykComponent, SnykComponentOptions } from "../components/snyk";

export interface TypescriptProjectOptions
  extends typescript.TypeScriptProjectOptions {
  snykOptions: SnykComponentOptions;
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

    new SnykComponent(this, options.snykOptions);
    this.npmignore?.exclude(".bin");
  }
}
