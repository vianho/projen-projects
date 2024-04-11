import { GithubCredentials } from 'projen/lib/github';
import { NpmAccess } from 'projen/lib/javascript';
import * as constants from './src/constants';
import { JSIIProject } from './src/projects';

const project = new JSIIProject({
  defaultReleaseBranch: 'main',
  name: '@vianho/apidays24pj',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/vianho/projen-projects',
  author: 'Silviana',
  authorAddress: 'email@example.com',
  npmAccess: NpmAccess.PUBLIC,
  githubOptions: {
    projenCredentials: GithubCredentials.fromApp(),
  },
  snykOptions: {
    snykOrgId: 'vianho',
    snykMonitoredProjectId: 'a93b3425-3b4b-4218-b1b1-a67887c0591d',
  },
  peerDeps: ['constructs', 'projen'],
  devDeps: ['constructs', 'projen'],
  publishToPypi: {
    distName: constants.DEFAULT_PYPI_PACKAGE_NAME,
    module: constants.DEFAULT_PYPI_PACKAGE_NAME,
  },
  sampleCode: false,
});

project.synth();