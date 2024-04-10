import { python } from 'projen';
import { SnykComponent, SnykComponentOptions } from '../components/snyk';

export interface PythonProjectOptions extends python.PythonProjectOptions {
  readonly snykOptions: SnykComponentOptions;
}

/**
 * Python project
 * @pjid python
 */
export class PythonProject extends python.PythonProject {
  constructor(options: PythonProjectOptions) {
    super({
      ...options,
    });

    new SnykComponent(this, options.snykOptions);
  }
}
