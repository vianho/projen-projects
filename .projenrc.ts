import { GithubCredentials } from 'projen/lib/github';
import { JSIIProject } from './src/projects';

const project = new JSIIProject({
  defaultReleaseBranch: 'main',
  name: 'apidays24pj',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/vianho/projen-projects',
  author: 'Silviana',
  authorAddress: 'email@example.com',
  githubOptions: {
    projenCredentials: GithubCredentials.fromApp(),
  },
  snykOptions: {
    snykOrgId: 'vianho',
    snykMonitoredProjectId: 'a93b3425-3b4b-4218-b1b1-a67887c0591d',
  },
  peerDeps: ['constructs', 'projen'],
  devDeps: ['constructs', 'projen'],
  npmRegistryUrl: 'https://npm.pkg.github.com',
  publishToPypi: {
    distName: 'apidays24pj',
    module: 'apidays24pj',
  },
  sampleCode: false,
});

project.synth();
