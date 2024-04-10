import { FileBase, FileBaseOptions, IResolver, Project } from 'projen';

export interface EnvrcOptions extends FileBaseOptions {}

// to use with direnv
// https://direnv.net/
// brew install direnv
// echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
// direnv allow .
export class Envrc extends FileBase {
  constructor(project: Project, filePath: string, options?: EnvrcOptions) {
    super(project, filePath, options);
  }
  protected synthesizeContent(resolver: IResolver): string | undefined {
    const lines = [
      ...(this.marker ? [`# ${this.marker}`] : []),
      'PATH_add .bin',
    ];

    return `${resolver.resolve(lines).join('\n')}\n`;
  }
}
