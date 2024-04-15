import { DependencyType, python } from 'projen';
import { SnykComponent, SnykComponentOptions } from '../components/snyk';
import * as constants from '../constants';

export interface PythonProjectOptions extends python.PythonProjectOptions {
  readonly snykOptions?: SnykComponentOptions;
}

/**
 * Python project
 * @pjid py
 */
export class PythonProject extends python.PythonProject {
  constructor(options: PythonProjectOptions) {
    super({
      ...options,
    });

    new SnykComponent(this, options?.snykOptions ?? {});
    this.deps.removeDependency(
      constants.DEFAULT_NPM_PACKAGE_NAME,
      DependencyType.DEVENV,
    );
    // this.addDevDependency(constants.DEFAULT_PYPI_PACKAGE_NAME);
  }
}
