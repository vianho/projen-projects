import { JSIIProject } from './src/projects';

const project = new JSIIProject({
  defaultReleaseBranch: 'main',
  name: 'projen-projects',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/vianho/projen-projects',
  author: 'Silviana',
  authorAddress: 'email@example.com',
  snykOptions: {
    snykOrgId: 'vianho',
    snykMonitoredProjectId: 'a93b3425-3b4b-4218-b1b1-a67887c0591d',
  },
  peerDeps: ['constructs', 'projen'],
  devDeps: ['constructs', 'projen'],
});

project.synth();