import { java } from 'projen';
import { SnykComponent, SnykComponentOptions } from '../components/snyk';

export interface JavaProjectOptions extends java.JavaProjectOptions {
  readonly snykOptions: SnykComponentOptions;
}

/**
 * Java project
 * @pjid java
 */
export class JavaProject extends java.JavaProject {
  constructor(options: JavaProjectOptions) {
    super({
      ...options,
    });

    new SnykComponent(this, options.snykOptions);
  }
}
