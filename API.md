# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Envrc <a name="Envrc" id="projen-projects.Envrc"></a>

#### Initializers <a name="Initializers" id="projen-projects.Envrc.Initializer"></a>

```typescript
import { Envrc } from 'projen-projects'

new Envrc(project: Project, filePath: string, options?: EnvrcOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.Envrc.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen-projects.Envrc.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.Envrc.Initializer.parameter.options">options</a></code> | <code><a href="#projen-projects.EnvrcOptions">EnvrcOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.Envrc.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.Envrc.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen-projects.Envrc.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-projects.EnvrcOptions">EnvrcOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.Envrc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-projects.Envrc.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen-projects.Envrc.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen-projects.Envrc.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |

---

##### `toString` <a name="toString" id="projen-projects.Envrc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen-projects.Envrc.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-projects.Envrc.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen-projects.Envrc.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.Envrc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-projects.Envrc.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen-projects.Envrc.isConstruct"></a>

```typescript
import { Envrc } from 'projen-projects'

Envrc.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.Envrc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen-projects.Envrc.isComponent"></a>

```typescript
import { Envrc } from 'projen-projects'

Envrc.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.Envrc.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.Envrc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-projects.Envrc.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen-projects.Envrc.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen-projects.Envrc.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen-projects.Envrc.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen-projects.Envrc.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen-projects.Envrc.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen-projects.Envrc.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-projects.Envrc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.Envrc.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen-projects.Envrc.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen-projects.Envrc.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen-projects.Envrc.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen-projects.Envrc.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen-projects.Envrc.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen-projects.Envrc.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---


### JavaProject <a name="JavaProject" id="projen-projects.JavaProject"></a>

Java project.

#### Initializers <a name="Initializers" id="projen-projects.JavaProject.Initializer"></a>

```typescript
import { JavaProject } from 'projen-projects'

new JavaProject(options: JavaProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.JavaProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen-projects.JavaProjectOptions">JavaProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-projects.JavaProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-projects.JavaProjectOptions">JavaProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.JavaProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-projects.JavaProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-projects.JavaProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-projects.JavaProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen-projects.JavaProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-projects.JavaProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-projects.JavaProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen-projects.JavaProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-projects.JavaProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-projects.JavaProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-projects.JavaProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-projects.JavaProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-projects.JavaProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-projects.JavaProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-projects.JavaProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-projects.JavaProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-projects.JavaProject.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#projen-projects.JavaProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the pom. |
| <code><a href="#projen-projects.JavaProject.addTestDependency">addTestDependency</a></code> | Adds a test dependency. |

---

##### `toString` <a name="toString" id="projen-projects.JavaProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-projects.JavaProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-projects.JavaProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-projects.JavaProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-projects.JavaProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-projects.JavaProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="projen-projects.JavaProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="projen-projects.JavaProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.JavaProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-projects.JavaProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-projects.JavaProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-projects.JavaProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-projects.JavaProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-projects.JavaProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-projects.JavaProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-projects.JavaProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-projects.JavaProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.JavaProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-projects.JavaProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="projen-projects.JavaProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-projects.JavaProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-projects.JavaProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.JavaProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-projects.JavaProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.JavaProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-projects.JavaProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.JavaProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-projects.JavaProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.JavaProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="projen-projects.JavaProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen-projects.JavaProject.addDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

##### `addPlugin` <a name="addPlugin" id="projen-projects.JavaProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): Dependency
```

Adds a build plugin to the pom.

The plug in is also added as a BUILD dep to the project.

###### `spec`<sup>Required</sup> <a name="spec" id="projen-projects.JavaProject.addPlugin.parameter.spec"></a>

- *Type:* string

dependency spec (`group/artifact@version`).

---

###### `options`<sup>Optional</sup> <a name="options" id="projen-projects.JavaProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

plugin options.

---

##### `addTestDependency` <a name="addTestDependency" id="projen-projects.JavaProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen-projects.JavaProject.addTestDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.JavaProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-projects.JavaProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen-projects.JavaProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-projects.JavaProject.isConstruct"></a>

```typescript
import { JavaProject } from 'projen-projects'

JavaProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.JavaProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen-projects.JavaProject.isProject"></a>

```typescript
import { JavaProject } from 'projen-projects'

JavaProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.JavaProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen-projects.JavaProject.of"></a>

```typescript
import { JavaProject } from 'projen-projects'

JavaProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-projects.JavaProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.JavaProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-projects.JavaProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JavaProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-projects.JavaProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JavaProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-projects.JavaProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-projects.JavaProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-projects.JavaProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-projects.JavaProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-projects.JavaProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-projects.JavaProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-projects.JavaProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-projects.JavaProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-projects.JavaProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JavaProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JavaProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JavaProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-projects.JavaProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-projects.JavaProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-projects.JavaProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen-projects.JavaProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-projects.JavaProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JavaProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-projects.JavaProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-projects.JavaProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-projects.JavaProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen-projects.JavaProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen-projects.JavaProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen-projects.JavaProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen-projects.JavaProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen-projects.JavaProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen-projects.JavaProject.property.compile">compile</a></code> | <code>projen.java.MavenCompile</code> | Compile component. |
| <code><a href="#projen-projects.JavaProject.property.distdir">distdir</a></code> | <code>string</code> | Maven artifact output directory. |
| <code><a href="#projen-projects.JavaProject.property.packaging">packaging</a></code> | <code>projen.java.MavenPackaging</code> | Packaging component. |
| <code><a href="#projen-projects.JavaProject.property.pom">pom</a></code> | <code>projen.java.Pom</code> | API for managing `pom.xml`. |
| <code><a href="#projen-projects.JavaProject.property.junit">junit</a></code> | <code>projen.java.Junit</code> | JUnit component. |
| <code><a href="#projen-projects.JavaProject.property.projenrc">projenrc</a></code> | <code>projen.java.Projenrc</code> | Projenrc component. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-projects.JavaProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-projects.JavaProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-projects.JavaProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-projects.JavaProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-projects.JavaProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.JavaProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-projects.JavaProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-projects.JavaProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-projects.JavaProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-projects.JavaProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-projects.JavaProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-projects.JavaProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-projects.JavaProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-projects.JavaProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-projects.JavaProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-projects.JavaProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-projects.JavaProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-projects.JavaProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-projects.JavaProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-projects.JavaProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-projects.JavaProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-projects.JavaProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-projects.JavaProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-projects.JavaProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-projects.JavaProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-projects.JavaProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-projects.JavaProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-projects.JavaProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-projects.JavaProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-projects.JavaProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-projects.JavaProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `compile`<sup>Required</sup> <a name="compile" id="projen-projects.JavaProject.property.compile"></a>

```typescript
public readonly compile: MavenCompile;
```

- *Type:* projen.java.MavenCompile

Compile component.

---

##### `distdir`<sup>Required</sup> <a name="distdir" id="projen-projects.JavaProject.property.distdir"></a>

```typescript
public readonly distdir: string;
```

- *Type:* string

Maven artifact output directory.

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="projen-projects.JavaProject.property.packaging"></a>

```typescript
public readonly packaging: MavenPackaging;
```

- *Type:* projen.java.MavenPackaging

Packaging component.

---

##### `pom`<sup>Required</sup> <a name="pom" id="projen-projects.JavaProject.property.pom"></a>

```typescript
public readonly pom: Pom;
```

- *Type:* projen.java.Pom

API for managing `pom.xml`.

---

##### `junit`<sup>Optional</sup> <a name="junit" id="projen-projects.JavaProject.property.junit"></a>

```typescript
public readonly junit: Junit;
```

- *Type:* projen.java.Junit

JUnit component.

---

##### `projenrc`<sup>Optional</sup> <a name="projenrc" id="projen-projects.JavaProject.property.projenrc"></a>

```typescript
public readonly projenrc: Projenrc;
```

- *Type:* projen.java.Projenrc

Projenrc component.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.JavaProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-projects.JavaProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### JSIIProject <a name="JSIIProject" id="projen-projects.JSIIProject"></a>

JSII project.

#### Initializers <a name="Initializers" id="projen-projects.JSIIProject.Initializer"></a>

```typescript
import { JSIIProject } from 'projen-projects'

new JSIIProject(options: JSIIProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.JSIIProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen-projects.JSIIProjectOptions">JSIIProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-projects.JSIIProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-projects.JSIIProjectOptions">JSIIProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.JSIIProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-projects.JSIIProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-projects.JSIIProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-projects.JSIIProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen-projects.JSIIProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-projects.JSIIProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-projects.JSIIProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen-projects.JSIIProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-projects.JSIIProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-projects.JSIIProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-projects.JSIIProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-projects.JSIIProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-projects.JSIIProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-projects.JSIIProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-projects.JSIIProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-projects.JSIIProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-projects.JSIIProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen-projects.JSIIProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-projects.JSIIProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen-projects.JSIIProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen-projects.JSIIProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen-projects.JSIIProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen-projects.JSIIProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen-projects.JSIIProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen-projects.JSIIProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-projects.JSIIProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen-projects.JSIIProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen-projects.JSIIProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen-projects.JSIIProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="projen-projects.JSIIProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-projects.JSIIProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-projects.JSIIProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-projects.JSIIProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-projects.JSIIProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-projects.JSIIProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-projects.JSIIProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen-projects.JSIIProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.JSIIProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-projects.JSIIProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-projects.JSIIProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-projects.JSIIProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-projects.JSIIProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-projects.JSIIProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-projects.JSIIProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-projects.JSIIProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-projects.JSIIProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.JSIIProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-projects.JSIIProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-projects.JSIIProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-projects.JSIIProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-projects.JSIIProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.JSIIProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-projects.JSIIProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.JSIIProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-projects.JSIIProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.JSIIProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-projects.JSIIProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.JSIIProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-projects.JSIIProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-projects.JSIIProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-projects.JSIIProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.JSIIProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-projects.JSIIProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-projects.JSIIProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen-projects.JSIIProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.JSIIProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-projects.JSIIProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.JSIIProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-projects.JSIIProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-projects.JSIIProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-projects.JSIIProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-projects.JSIIProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-projects.JSIIProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.JSIIProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen-projects.JSIIProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen-projects.JSIIProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-projects.JSIIProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-projects.JSIIProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen-projects.JSIIProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.JSIIProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-projects.JSIIProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.JSIIProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-projects.JSIIProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-projects.JSIIProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-projects.JSIIProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.JSIIProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-projects.JSIIProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.JSIIProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-projects.JSIIProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen-projects.JSIIProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-projects.JSIIProject.isConstruct"></a>

```typescript
import { JSIIProject } from 'projen-projects'

JSIIProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.JSIIProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen-projects.JSIIProject.isProject"></a>

```typescript
import { JSIIProject } from 'projen-projects'

JSIIProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.JSIIProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen-projects.JSIIProject.of"></a>

```typescript
import { JSIIProject } from 'projen-projects'

JSIIProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-projects.JSIIProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.JSIIProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-projects.JSIIProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-projects.JSIIProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-projects.JSIIProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-projects.JSIIProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-projects.JSIIProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-projects.JSIIProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-projects.JSIIProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-projects.JSIIProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-projects.JSIIProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-projects.JSIIProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-projects.JSIIProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-projects.JSIIProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-projects.JSIIProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-projects.JSIIProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen-projects.JSIIProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-projects.JSIIProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-projects.JSIIProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-projects.JSIIProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-projects.JSIIProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen-projects.JSIIProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen-projects.JSIIProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen-projects.JSIIProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen-projects.JSIIProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen-projects.JSIIProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen-projects.JSIIProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen-projects.JSIIProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen-projects.JSIIProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen-projects.JSIIProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen-projects.JSIIProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-projects.JSIIProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen-projects.JSIIProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen-projects.JSIIProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen-projects.JSIIProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen-projects.JSIIProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen-projects.JSIIProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen-projects.JSIIProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen-projects.JSIIProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen-projects.JSIIProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen-projects.JSIIProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen-projects.JSIIProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen-projects.JSIIProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen-projects.JSIIProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen-projects.JSIIProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen-projects.JSIIProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen-projects.JSIIProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-projects.JSIIProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-projects.JSIIProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-projects.JSIIProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-projects.JSIIProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-projects.JSIIProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.JSIIProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-projects.JSIIProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-projects.JSIIProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-projects.JSIIProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-projects.JSIIProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-projects.JSIIProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-projects.JSIIProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-projects.JSIIProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-projects.JSIIProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-projects.JSIIProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-projects.JSIIProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-projects.JSIIProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-projects.JSIIProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-projects.JSIIProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-projects.JSIIProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-projects.JSIIProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-projects.JSIIProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-projects.JSIIProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-projects.JSIIProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-projects.JSIIProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-projects.JSIIProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-projects.JSIIProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-projects.JSIIProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-projects.JSIIProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-projects.JSIIProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-projects.JSIIProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-projects.JSIIProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-projects.JSIIProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-projects.JSIIProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-projects.JSIIProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-projects.JSIIProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-projects.JSIIProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen-projects.JSIIProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen-projects.JSIIProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-projects.JSIIProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-projects.JSIIProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-projects.JSIIProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-projects.JSIIProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-projects.JSIIProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-projects.JSIIProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-projects.JSIIProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-projects.JSIIProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-projects.JSIIProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-projects.JSIIProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-projects.JSIIProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-projects.JSIIProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-projects.JSIIProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-projects.JSIIProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-projects.JSIIProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-projects.JSIIProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-projects.JSIIProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-projects.JSIIProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-projects.JSIIProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-projects.JSIIProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-projects.JSIIProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-projects.JSIIProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-projects.JSIIProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.JSIIProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen-projects.JSIIProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-projects.JSIIProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen-projects.JSIIProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### PythonProject <a name="PythonProject" id="projen-projects.PythonProject"></a>

Python project.

#### Initializers <a name="Initializers" id="projen-projects.PythonProject.Initializer"></a>

```typescript
import { PythonProject } from 'projen-projects'

new PythonProject(options: PythonProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.PythonProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen-projects.PythonProjectOptions">PythonProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-projects.PythonProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-projects.PythonProjectOptions">PythonProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.PythonProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-projects.PythonProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-projects.PythonProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-projects.PythonProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen-projects.PythonProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-projects.PythonProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-projects.PythonProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen-projects.PythonProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-projects.PythonProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-projects.PythonProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-projects.PythonProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-projects.PythonProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-projects.PythonProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-projects.PythonProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-projects.PythonProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-projects.PythonProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-projects.PythonProject.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#projen-projects.PythonProject.addDevDependency">addDevDependency</a></code> | Adds a dev dependency. |

---

##### `toString` <a name="toString" id="projen-projects.PythonProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-projects.PythonProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-projects.PythonProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-projects.PythonProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-projects.PythonProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-projects.PythonProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="projen-projects.PythonProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="projen-projects.PythonProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.PythonProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-projects.PythonProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-projects.PythonProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-projects.PythonProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-projects.PythonProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-projects.PythonProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-projects.PythonProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-projects.PythonProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-projects.PythonProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.PythonProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-projects.PythonProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="projen-projects.PythonProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-projects.PythonProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-projects.PythonProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.PythonProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-projects.PythonProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.PythonProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-projects.PythonProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.PythonProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-projects.PythonProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.PythonProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="projen-projects.PythonProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen-projects.PythonProject.addDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

##### `addDevDependency` <a name="addDevDependency" id="projen-projects.PythonProject.addDevDependency"></a>

```typescript
public addDevDependency(spec: string): void
```

Adds a dev dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen-projects.PythonProject.addDevDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.PythonProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-projects.PythonProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen-projects.PythonProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-projects.PythonProject.isConstruct"></a>

```typescript
import { PythonProject } from 'projen-projects'

PythonProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.PythonProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen-projects.PythonProject.isProject"></a>

```typescript
import { PythonProject } from 'projen-projects'

PythonProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.PythonProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen-projects.PythonProject.of"></a>

```typescript
import { PythonProject } from 'projen-projects'

PythonProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-projects.PythonProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.PythonProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-projects.PythonProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.PythonProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-projects.PythonProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.PythonProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-projects.PythonProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-projects.PythonProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-projects.PythonProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-projects.PythonProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-projects.PythonProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-projects.PythonProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-projects.PythonProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-projects.PythonProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-projects.PythonProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.PythonProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.PythonProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.PythonProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-projects.PythonProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-projects.PythonProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-projects.PythonProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen-projects.PythonProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-projects.PythonProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.PythonProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-projects.PythonProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-projects.PythonProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-projects.PythonProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen-projects.PythonProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen-projects.PythonProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen-projects.PythonProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen-projects.PythonProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen-projects.PythonProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen-projects.PythonProject.property.depsManager">depsManager</a></code> | <code>projen.python.IPythonDeps</code> | API for managing dependencies. |
| <code><a href="#projen-projects.PythonProject.property.envManager">envManager</a></code> | <code>projen.python.IPythonEnv</code> | API for mangaging the Python runtime environment. |
| <code><a href="#projen-projects.PythonProject.property.moduleName">moduleName</a></code> | <code>string</code> | Python module name (the project name, with any hyphens or periods replaced with underscores). |
| <code><a href="#projen-projects.PythonProject.property.version">version</a></code> | <code>string</code> | Version of the package for distribution (should follow semver). |
| <code><a href="#projen-projects.PythonProject.property.packagingManager">packagingManager</a></code> | <code>projen.python.IPythonPackaging</code> | API for managing packaging the project as a library. |
| <code><a href="#projen-projects.PythonProject.property.pytest">pytest</a></code> | <code>projen.python.Pytest</code> | Pytest component. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-projects.PythonProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-projects.PythonProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-projects.PythonProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-projects.PythonProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-projects.PythonProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.PythonProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-projects.PythonProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-projects.PythonProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-projects.PythonProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-projects.PythonProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-projects.PythonProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-projects.PythonProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-projects.PythonProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-projects.PythonProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-projects.PythonProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-projects.PythonProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-projects.PythonProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-projects.PythonProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-projects.PythonProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-projects.PythonProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-projects.PythonProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-projects.PythonProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-projects.PythonProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-projects.PythonProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-projects.PythonProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-projects.PythonProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-projects.PythonProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-projects.PythonProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-projects.PythonProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-projects.PythonProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-projects.PythonProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `depsManager`<sup>Required</sup> <a name="depsManager" id="projen-projects.PythonProject.property.depsManager"></a>

```typescript
public readonly depsManager: IPythonDeps;
```

- *Type:* projen.python.IPythonDeps

API for managing dependencies.

---

##### `envManager`<sup>Required</sup> <a name="envManager" id="projen-projects.PythonProject.property.envManager"></a>

```typescript
public readonly envManager: IPythonEnv;
```

- *Type:* projen.python.IPythonEnv

API for mangaging the Python runtime environment.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="projen-projects.PythonProject.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Python module name (the project name, with any hyphens or periods replaced with underscores).

---

##### `version`<sup>Required</sup> <a name="version" id="projen-projects.PythonProject.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the package for distribution (should follow semver).

---

##### `packagingManager`<sup>Optional</sup> <a name="packagingManager" id="projen-projects.PythonProject.property.packagingManager"></a>

```typescript
public readonly packagingManager: IPythonPackaging;
```

- *Type:* projen.python.IPythonPackaging

API for managing packaging the project as a library.

Only applies when the `projectType` is LIB.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="projen-projects.PythonProject.property.pytest"></a>

```typescript
public readonly pytest: Pytest;
```

- *Type:* projen.python.Pytest

Pytest component.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.PythonProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-projects.PythonProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### SecurityScanWorkflow <a name="SecurityScanWorkflow" id="projen-projects.SecurityScanWorkflow"></a>

#### Initializers <a name="Initializers" id="projen-projects.SecurityScanWorkflow.Initializer"></a>

```typescript
import { SecurityScanWorkflow } from 'projen-projects'

new SecurityScanWorkflow(project: JavaProject | PythonProject | NodeProject | JsiiProject, name: string, options?: SecurityScanWorkflowOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SecurityScanWorkflow.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject \| projen.python.PythonProject \| projen.javascript.NodeProject \| projen.cdk.JsiiProject</code> | *No description.* |
| <code><a href="#projen-projects.SecurityScanWorkflow.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.SecurityScanWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#projen-projects.SecurityScanWorkflowOptions">SecurityScanWorkflowOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.SecurityScanWorkflow.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject | projen.python.PythonProject | projen.javascript.NodeProject | projen.cdk.JsiiProject

---

##### `name`<sup>Required</sup> <a name="name" id="projen-projects.SecurityScanWorkflow.Initializer.parameter.name"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen-projects.SecurityScanWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-projects.SecurityScanWorkflowOptions">SecurityScanWorkflowOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SecurityScanWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-projects.SecurityScanWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen-projects.SecurityScanWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen-projects.SecurityScanWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen-projects.SecurityScanWorkflow.callReusableWorkflow">callReusableWorkflow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="projen-projects.SecurityScanWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen-projects.SecurityScanWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-projects.SecurityScanWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen-projects.SecurityScanWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `callReusableWorkflow` <a name="callReusableWorkflow" id="projen-projects.SecurityScanWorkflow.callReusableWorkflow"></a>

```typescript
public callReusableWorkflow(id: string, path: string, permissions?: JobPermissions): void
```

###### `id`<sup>Required</sup> <a name="id" id="projen-projects.SecurityScanWorkflow.callReusableWorkflow.parameter.id"></a>

- *Type:* string

---

###### `path`<sup>Required</sup> <a name="path" id="projen-projects.SecurityScanWorkflow.callReusableWorkflow.parameter.path"></a>

- *Type:* string

---

###### `permissions`<sup>Optional</sup> <a name="permissions" id="projen-projects.SecurityScanWorkflow.callReusableWorkflow.parameter.permissions"></a>

- *Type:* projen.github.workflows.JobPermissions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SecurityScanWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-projects.SecurityScanWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen-projects.SecurityScanWorkflow.isConstruct"></a>

```typescript
import { SecurityScanWorkflow } from 'projen-projects'

SecurityScanWorkflow.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.SecurityScanWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen-projects.SecurityScanWorkflow.isComponent"></a>

```typescript
import { SecurityScanWorkflow } from 'projen-projects'

SecurityScanWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.SecurityScanWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SecurityScanWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-projects.SecurityScanWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen-projects.SecurityScanWorkflow.property.workflow">workflow</a></code> | <code>projen.github.GithubWorkflow</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-projects.SecurityScanWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.SecurityScanWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="projen-projects.SecurityScanWorkflow.property.workflow"></a>

```typescript
public readonly workflow: GithubWorkflow;
```

- *Type:* projen.github.GithubWorkflow

---


### SnykComponent <a name="SnykComponent" id="projen-projects.SnykComponent"></a>

#### Initializers <a name="Initializers" id="projen-projects.SnykComponent.Initializer"></a>

```typescript
import { SnykComponent } from 'projen-projects'

new SnykComponent(project: JavaProject | PythonProject | NodeProject | JsiiProject, options: SnykComponentOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykComponent.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject \| projen.python.PythonProject \| projen.javascript.NodeProject \| projen.cdk.JsiiProject</code> | *No description.* |
| <code><a href="#projen-projects.SnykComponent.Initializer.parameter.options">options</a></code> | <code><a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.SnykComponent.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject | projen.python.PythonProject | projen.javascript.NodeProject | projen.cdk.JsiiProject

---

##### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykComponent.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SnykComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-projects.SnykComponent.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen-projects.SnykComponent.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen-projects.SnykComponent.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen-projects.SnykComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen-projects.SnykComponent.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-projects.SnykComponent.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen-projects.SnykComponent.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SnykComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-projects.SnykComponent.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen-projects.SnykComponent.isConstruct"></a>

```typescript
import { SnykComponent } from 'projen-projects'

SnykComponent.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.SnykComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen-projects.SnykComponent.isComponent"></a>

```typescript
import { SnykComponent } from 'projen-projects'

SnykComponent.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.SnykComponent.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-projects.SnykComponent.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen-projects.SnykComponent.property.enableSast">enableSast</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.SnykComponent.property.enableSca">enableSca</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.SnykComponent.property.snykWorkflowName">snykWorkflowName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-projects.SnykComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.SnykComponent.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `enableSast`<sup>Required</sup> <a name="enableSast" id="projen-projects.SnykComponent.property.enableSast"></a>

```typescript
public readonly enableSast: boolean;
```

- *Type:* boolean

---

##### `enableSca`<sup>Required</sup> <a name="enableSca" id="projen-projects.SnykComponent.property.enableSca"></a>

```typescript
public readonly enableSca: boolean;
```

- *Type:* boolean

---

##### `snykWorkflowName`<sup>Required</sup> <a name="snykWorkflowName" id="projen-projects.SnykComponent.property.snykWorkflowName"></a>

```typescript
public readonly snykWorkflowName: string;
```

- *Type:* string

---


### SnykSastWorkflow <a name="SnykSastWorkflow" id="projen-projects.SnykSastWorkflow"></a>

#### Initializers <a name="Initializers" id="projen-projects.SnykSastWorkflow.Initializer"></a>

```typescript
import { SnykSastWorkflow } from 'projen-projects'

new SnykSastWorkflow(project: JavaProject | PythonProject | NodeProject | JsiiProject, options: SnykSastWorkflowOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykSastWorkflow.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject \| projen.python.PythonProject \| projen.javascript.NodeProject \| projen.cdk.JsiiProject</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#projen-projects.SnykSastWorkflowOptions">SnykSastWorkflowOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.SnykSastWorkflow.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject | projen.python.PythonProject | projen.javascript.NodeProject | projen.cdk.JsiiProject

---

##### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykSastWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-projects.SnykSastWorkflowOptions">SnykSastWorkflowOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SnykSastWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-projects.SnykSastWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen-projects.SnykSastWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen-projects.SnykSastWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen-projects.SnykSastWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen-projects.SnykSastWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-projects.SnykSastWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen-projects.SnykSastWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SnykSastWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-projects.SnykSastWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen-projects.SnykSastWorkflow.isConstruct"></a>

```typescript
import { SnykSastWorkflow } from 'projen-projects'

SnykSastWorkflow.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.SnykSastWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen-projects.SnykSastWorkflow.isComponent"></a>

```typescript
import { SnykSastWorkflow } from 'projen-projects'

SnykSastWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.SnykSastWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykSastWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-projects.SnykSastWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflow.property.workflow">workflow</a></code> | <code>projen.github.GithubWorkflow</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-projects.SnykSastWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.SnykSastWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="projen-projects.SnykSastWorkflow.property.workflow"></a>

```typescript
public readonly workflow: GithubWorkflow;
```

- *Type:* projen.github.GithubWorkflow

---


### SnykScaWorkflow <a name="SnykScaWorkflow" id="projen-projects.SnykScaWorkflow"></a>

#### Initializers <a name="Initializers" id="projen-projects.SnykScaWorkflow.Initializer"></a>

```typescript
import { SnykScaWorkflow } from 'projen-projects'

new SnykScaWorkflow(project: JavaProject | PythonProject | NodeProject | JsiiProject, options: SnykScaWorkflowOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykScaWorkflow.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject \| projen.python.PythonProject \| projen.javascript.NodeProject \| projen.cdk.JsiiProject</code> | *No description.* |
| <code><a href="#projen-projects.SnykScaWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#projen-projects.SnykScaWorkflowOptions">SnykScaWorkflowOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.SnykScaWorkflow.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject | projen.python.PythonProject | projen.javascript.NodeProject | projen.cdk.JsiiProject

---

##### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykScaWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-projects.SnykScaWorkflowOptions">SnykScaWorkflowOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SnykScaWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-projects.SnykScaWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen-projects.SnykScaWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen-projects.SnykScaWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen-projects.SnykScaWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen-projects.SnykScaWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-projects.SnykScaWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen-projects.SnykScaWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SnykScaWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-projects.SnykScaWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen-projects.SnykScaWorkflow.isConstruct"></a>

```typescript
import { SnykScaWorkflow } from 'projen-projects'

SnykScaWorkflow.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.SnykScaWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen-projects.SnykScaWorkflow.isComponent"></a>

```typescript
import { SnykScaWorkflow } from 'projen-projects'

SnykScaWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.SnykScaWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykScaWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-projects.SnykScaWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen-projects.SnykScaWorkflow.property.workflow">workflow</a></code> | <code>projen.github.GithubWorkflow</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-projects.SnykScaWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen-projects.SnykScaWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="projen-projects.SnykScaWorkflow.property.workflow"></a>

```typescript
public readonly workflow: GithubWorkflow;
```

- *Type:* projen.github.GithubWorkflow

---


### TypescriptProject <a name="TypescriptProject" id="projen-projects.TypescriptProject"></a>

TypeScript project.

#### Initializers <a name="Initializers" id="projen-projects.TypescriptProject.Initializer"></a>

```typescript
import { TypescriptProject } from 'projen-projects'

new TypescriptProject(options: TypescriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.TypescriptProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen-projects.TypescriptProjectOptions">TypescriptProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-projects.TypescriptProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-projects.TypescriptProjectOptions">TypescriptProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.TypescriptProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-projects.TypescriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-projects.TypescriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-projects.TypescriptProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen-projects.TypescriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-projects.TypescriptProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-projects.TypescriptProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen-projects.TypescriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-projects.TypescriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-projects.TypescriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-projects.TypescriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-projects.TypescriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-projects.TypescriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-projects.TypescriptProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-projects.TypescriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-projects.TypescriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-projects.TypescriptProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen-projects.TypescriptProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-projects.TypescriptProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen-projects.TypescriptProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen-projects.TypescriptProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen-projects.TypescriptProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen-projects.TypescriptProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen-projects.TypescriptProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen-projects.TypescriptProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-projects.TypescriptProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen-projects.TypescriptProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen-projects.TypescriptProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen-projects.TypescriptProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="projen-projects.TypescriptProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-projects.TypescriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-projects.TypescriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-projects.TypescriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-projects.TypescriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-projects.TypescriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-projects.TypescriptProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen-projects.TypescriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.TypescriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-projects.TypescriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-projects.TypescriptProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-projects.TypescriptProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-projects.TypescriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-projects.TypescriptProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-projects.TypescriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-projects.TypescriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-projects.TypescriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.TypescriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-projects.TypescriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-projects.TypescriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-projects.TypescriptProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-projects.TypescriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.TypescriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-projects.TypescriptProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.TypescriptProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-projects.TypescriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.TypescriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-projects.TypescriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-projects.TypescriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-projects.TypescriptProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-projects.TypescriptProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-projects.TypescriptProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.TypescriptProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-projects.TypescriptProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-projects.TypescriptProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen-projects.TypescriptProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.TypescriptProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-projects.TypescriptProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.TypescriptProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-projects.TypescriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-projects.TypescriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-projects.TypescriptProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-projects.TypescriptProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-projects.TypescriptProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.TypescriptProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen-projects.TypescriptProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen-projects.TypescriptProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-projects.TypescriptProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-projects.TypescriptProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen-projects.TypescriptProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.TypescriptProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-projects.TypescriptProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.TypescriptProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-projects.TypescriptProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-projects.TypescriptProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-projects.TypescriptProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-projects.TypescriptProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-projects.TypescriptProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.TypescriptProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-projects.TypescriptProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen-projects.TypescriptProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-projects.TypescriptProject.isConstruct"></a>

```typescript
import { TypescriptProject } from 'projen-projects'

TypescriptProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.TypescriptProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen-projects.TypescriptProject.isProject"></a>

```typescript
import { TypescriptProject } from 'projen-projects'

TypescriptProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-projects.TypescriptProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen-projects.TypescriptProject.of"></a>

```typescript
import { TypescriptProject } from 'projen-projects'

TypescriptProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-projects.TypescriptProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.TypescriptProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-projects.TypescriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-projects.TypescriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-projects.TypescriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-projects.TypescriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-projects.TypescriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-projects.TypescriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-projects.TypescriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-projects.TypescriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-projects.TypescriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-projects.TypescriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-projects.TypescriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-projects.TypescriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-projects.TypescriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-projects.TypescriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen-projects.TypescriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-projects.TypescriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-projects.TypescriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-projects.TypescriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-projects.TypescriptProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen-projects.TypescriptProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen-projects.TypescriptProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen-projects.TypescriptProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen-projects.TypescriptProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen-projects.TypescriptProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen-projects.TypescriptProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen-projects.TypescriptProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen-projects.TypescriptProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen-projects.TypescriptProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen-projects.TypescriptProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-projects.TypescriptProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen-projects.TypescriptProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen-projects.TypescriptProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen-projects.TypescriptProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen-projects.TypescriptProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen-projects.TypescriptProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen-projects.TypescriptProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen-projects.TypescriptProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen-projects.TypescriptProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen-projects.TypescriptProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen-projects.TypescriptProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen-projects.TypescriptProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen-projects.TypescriptProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen-projects.TypescriptProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen-projects.TypescriptProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen-projects.TypescriptProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen-projects.TypescriptProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-projects.TypescriptProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-projects.TypescriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-projects.TypescriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-projects.TypescriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-projects.TypescriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-projects.TypescriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-projects.TypescriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-projects.TypescriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-projects.TypescriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-projects.TypescriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-projects.TypescriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-projects.TypescriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-projects.TypescriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-projects.TypescriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-projects.TypescriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-projects.TypescriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-projects.TypescriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-projects.TypescriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-projects.TypescriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-projects.TypescriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-projects.TypescriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-projects.TypescriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-projects.TypescriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-projects.TypescriptProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-projects.TypescriptProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-projects.TypescriptProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-projects.TypescriptProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-projects.TypescriptProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-projects.TypescriptProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-projects.TypescriptProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-projects.TypescriptProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-projects.TypescriptProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-projects.TypescriptProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-projects.TypescriptProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-projects.TypescriptProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-projects.TypescriptProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-projects.TypescriptProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen-projects.TypescriptProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen-projects.TypescriptProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-projects.TypescriptProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-projects.TypescriptProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-projects.TypescriptProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-projects.TypescriptProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-projects.TypescriptProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-projects.TypescriptProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-projects.TypescriptProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-projects.TypescriptProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-projects.TypescriptProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-projects.TypescriptProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-projects.TypescriptProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-projects.TypescriptProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-projects.TypescriptProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-projects.TypescriptProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-projects.TypescriptProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-projects.TypescriptProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-projects.TypescriptProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-projects.TypescriptProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-projects.TypescriptProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-projects.TypescriptProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-projects.TypescriptProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-projects.TypescriptProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-projects.TypescriptProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.TypescriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen-projects.TypescriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-projects.TypescriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen-projects.TypescriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticateSnykOptions <a name="AuthenticateSnykOptions" id="projen-projects.AuthenticateSnykOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.AuthenticateSnykOptions.Initializer"></a>

```typescript
import { AuthenticateSnykOptions } from 'projen-projects'

const authenticateSnykOptions: AuthenticateSnykOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.AuthenticateSnykOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-projects.AuthenticateSnykOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-projects.AuthenticateSnykOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-projects.AuthenticateSnykOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-projects.AuthenticateSnykOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-projects.AuthenticateSnykOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen-projects.AuthenticateSnykOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen-projects.AuthenticateSnykOptions.property.snykOrgId">snykOrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.AuthenticateSnykOptions.property.snykToken">snykToken</a></code> | <code>string</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-projects.AuthenticateSnykOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-projects.AuthenticateSnykOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-projects.AuthenticateSnykOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-projects.AuthenticateSnykOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-projects.AuthenticateSnykOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen-projects.AuthenticateSnykOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen-projects.AuthenticateSnykOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `snykOrgId`<sup>Required</sup> <a name="snykOrgId" id="projen-projects.AuthenticateSnykOptions.property.snykOrgId"></a>

```typescript
public readonly snykOrgId: string;
```

- *Type:* string

---

##### `snykToken`<sup>Optional</sup> <a name="snykToken" id="projen-projects.AuthenticateSnykOptions.property.snykToken"></a>

```typescript
public readonly snykToken: string;
```

- *Type:* string

---

### CreateCacheOptions <a name="CreateCacheOptions" id="projen-projects.CreateCacheOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.CreateCacheOptions.Initializer"></a>

```typescript
import { CreateCacheOptions } from 'projen-projects'

const createCacheOptions: CreateCacheOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.CreateCacheOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-projects.CreateCacheOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-projects.CreateCacheOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-projects.CreateCacheOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-projects.CreateCacheOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-projects.CreateCacheOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen-projects.CreateCacheOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen-projects.CreateCacheOptions.property.with">with</a></code> | <code><a href="#projen-projects.CreateCacheWithOptions">CreateCacheWithOptions</a></code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-projects.CreateCacheOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-projects.CreateCacheOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-projects.CreateCacheOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-projects.CreateCacheOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-projects.CreateCacheOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen-projects.CreateCacheOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen-projects.CreateCacheOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `with`<sup>Required</sup> <a name="with" id="projen-projects.CreateCacheOptions.property.with"></a>

```typescript
public readonly with: CreateCacheWithOptions;
```

- *Type:* <a href="#projen-projects.CreateCacheWithOptions">CreateCacheWithOptions</a>

---

### CreateCacheWithOptions <a name="CreateCacheWithOptions" id="projen-projects.CreateCacheWithOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.CreateCacheWithOptions.Initializer"></a>

```typescript
import { CreateCacheWithOptions } from 'projen-projects'

const createCacheWithOptions: CreateCacheWithOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.CreateCacheWithOptions.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.CreateCacheWithOptions.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.CreateCacheWithOptions.property.enableCrossOsArchive">enableCrossOsArchive</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.CreateCacheWithOptions.property.failOnCacheMiss">failOnCacheMiss</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.CreateCacheWithOptions.property.lookupOnly">lookupOnly</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.CreateCacheWithOptions.property.restoreKeys">restoreKeys</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.CreateCacheWithOptions.property.saveAlways">saveAlways</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.CreateCacheWithOptions.property.uploadChunkSize">uploadChunkSize</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="projen-projects.CreateCacheWithOptions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="projen-projects.CreateCacheWithOptions.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `enableCrossOsArchive`<sup>Optional</sup> <a name="enableCrossOsArchive" id="projen-projects.CreateCacheWithOptions.property.enableCrossOsArchive"></a>

```typescript
public readonly enableCrossOsArchive: boolean;
```

- *Type:* boolean

---

##### `failOnCacheMiss`<sup>Optional</sup> <a name="failOnCacheMiss" id="projen-projects.CreateCacheWithOptions.property.failOnCacheMiss"></a>

```typescript
public readonly failOnCacheMiss: boolean;
```

- *Type:* boolean

---

##### `lookupOnly`<sup>Optional</sup> <a name="lookupOnly" id="projen-projects.CreateCacheWithOptions.property.lookupOnly"></a>

```typescript
public readonly lookupOnly: boolean;
```

- *Type:* boolean

---

##### `restoreKeys`<sup>Optional</sup> <a name="restoreKeys" id="projen-projects.CreateCacheWithOptions.property.restoreKeys"></a>

```typescript
public readonly restoreKeys: string;
```

- *Type:* string

---

##### `saveAlways`<sup>Optional</sup> <a name="saveAlways" id="projen-projects.CreateCacheWithOptions.property.saveAlways"></a>

```typescript
public readonly saveAlways: boolean;
```

- *Type:* boolean

---

##### `uploadChunkSize`<sup>Optional</sup> <a name="uploadChunkSize" id="projen-projects.CreateCacheWithOptions.property.uploadChunkSize"></a>

```typescript
public readonly uploadChunkSize: string;
```

- *Type:* string

---

### EnvrcOptions <a name="EnvrcOptions" id="projen-projects.EnvrcOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.EnvrcOptions.Initializer"></a>

```typescript
import { EnvrcOptions } from 'projen-projects'

const envrcOptions: EnvrcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.EnvrcOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen-projects.EnvrcOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen-projects.EnvrcOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen-projects.EnvrcOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen-projects.EnvrcOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen-projects.EnvrcOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen-projects.EnvrcOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen-projects.EnvrcOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen-projects.EnvrcOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen-projects.EnvrcOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

### InstallSnykOptions <a name="InstallSnykOptions" id="projen-projects.InstallSnykOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.InstallSnykOptions.Initializer"></a>

```typescript
import { InstallSnykOptions } from 'projen-projects'

const installSnykOptions: InstallSnykOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.InstallSnykOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-projects.InstallSnykOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-projects.InstallSnykOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-projects.InstallSnykOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-projects.InstallSnykOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-projects.InstallSnykOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen-projects.InstallSnykOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen-projects.InstallSnykOptions.property.cache">cache</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.InstallSnykOptions.property.createCacheOptions">createCacheOptions</a></code> | <code><a href="#projen-projects.CreateCacheOptions">CreateCacheOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.InstallSnykOptions.property.snykDeltaVersion">snykDeltaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.InstallSnykOptions.property.snykVersion">snykVersion</a></code> | <code>string</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-projects.InstallSnykOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-projects.InstallSnykOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-projects.InstallSnykOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-projects.InstallSnykOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-projects.InstallSnykOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen-projects.InstallSnykOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen-projects.InstallSnykOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `cache`<sup>Optional</sup> <a name="cache" id="projen-projects.InstallSnykOptions.property.cache"></a>

```typescript
public readonly cache: boolean;
```

- *Type:* boolean

---

##### `createCacheOptions`<sup>Optional</sup> <a name="createCacheOptions" id="projen-projects.InstallSnykOptions.property.createCacheOptions"></a>

```typescript
public readonly createCacheOptions: CreateCacheOptions;
```

- *Type:* <a href="#projen-projects.CreateCacheOptions">CreateCacheOptions</a>

---

##### `snykDeltaVersion`<sup>Optional</sup> <a name="snykDeltaVersion" id="projen-projects.InstallSnykOptions.property.snykDeltaVersion"></a>

```typescript
public readonly snykDeltaVersion: string;
```

- *Type:* string

---

##### `snykVersion`<sup>Optional</sup> <a name="snykVersion" id="projen-projects.InstallSnykOptions.property.snykVersion"></a>

```typescript
public readonly snykVersion: string;
```

- *Type:* string

---

### InstallSnykPrDiffOptions <a name="InstallSnykPrDiffOptions" id="projen-projects.InstallSnykPrDiffOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.InstallSnykPrDiffOptions.Initializer"></a>

```typescript
import { InstallSnykPrDiffOptions } from 'projen-projects'

const installSnykPrDiffOptions: InstallSnykPrDiffOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.cache">cache</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.createCacheOptions">createCacheOptions</a></code> | <code><a href="#projen-projects.CreateCacheOptions">CreateCacheOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.InstallSnykPrDiffOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-projects.InstallSnykPrDiffOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-projects.InstallSnykPrDiffOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-projects.InstallSnykPrDiffOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-projects.InstallSnykPrDiffOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-projects.InstallSnykPrDiffOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen-projects.InstallSnykPrDiffOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen-projects.InstallSnykPrDiffOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `cache`<sup>Optional</sup> <a name="cache" id="projen-projects.InstallSnykPrDiffOptions.property.cache"></a>

```typescript
public readonly cache: boolean;
```

- *Type:* boolean

---

##### `createCacheOptions`<sup>Optional</sup> <a name="createCacheOptions" id="projen-projects.InstallSnykPrDiffOptions.property.createCacheOptions"></a>

```typescript
public readonly createCacheOptions: CreateCacheOptions;
```

- *Type:* <a href="#projen-projects.CreateCacheOptions">CreateCacheOptions</a>

---

##### `version`<sup>Optional</sup> <a name="version" id="projen-projects.InstallSnykPrDiffOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### JavaProjectOptions <a name="JavaProjectOptions" id="projen-projects.JavaProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.JavaProjectOptions.Initializer"></a>

```typescript
import { JavaProjectOptions } from 'projen-projects'

const javaProjectOptions: JavaProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.JavaProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-projects.JavaProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-projects.JavaProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-projects.JavaProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-projects.JavaProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-projects.JavaProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen-projects.JavaProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-projects.JavaProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-projects.JavaProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-projects.JavaProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-projects.JavaProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-projects.JavaProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-projects.JavaProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen-projects.JavaProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen-projects.JavaProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen-projects.JavaProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen-projects.JavaProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen-projects.JavaProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen-projects.JavaProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen-projects.JavaProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen-projects.JavaProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen-projects.JavaProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen-projects.JavaProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen-projects.JavaProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen-projects.JavaProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen-projects.JavaProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen-projects.JavaProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen-projects.JavaProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen-projects.JavaProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen-projects.JavaProjectOptions.property.artifactId">artifactId</a></code> | <code>string</code> | The artifactId is generally the name that the project is known by. |
| <code><a href="#projen-projects.JavaProjectOptions.property.groupId">groupId</a></code> | <code>string</code> | This is generally unique amongst an organization or a project. |
| <code><a href="#projen-projects.JavaProjectOptions.property.version">version</a></code> | <code>string</code> | This is the last piece of the naming puzzle. |
| <code><a href="#projen-projects.JavaProjectOptions.property.description">description</a></code> | <code>string</code> | Description of a project is always good. |
| <code><a href="#projen-projects.JavaProjectOptions.property.packaging">packaging</a></code> | <code>string</code> | Project packaging format. |
| <code><a href="#projen-projects.JavaProjectOptions.property.parentPom">parentPom</a></code> | <code>projen.java.ParentPom</code> | A Parent Pom can be used to have a child project inherit properties/plugins/ect in order to reduce duplication and keep standards across a large amount of repos. |
| <code><a href="#projen-projects.JavaProjectOptions.property.url">url</a></code> | <code>string</code> | The URL, like the name, is not required. |
| <code><a href="#projen-projects.JavaProjectOptions.property.compileOptions">compileOptions</a></code> | <code>projen.java.MavenCompileOptions</code> | Compile options. |
| <code><a href="#projen-projects.JavaProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | List of runtime dependencies for this project. |
| <code><a href="#projen-projects.JavaProjectOptions.property.distdir">distdir</a></code> | <code>string</code> | Final artifact output directory. |
| <code><a href="#projen-projects.JavaProjectOptions.property.junit">junit</a></code> | <code>boolean</code> | Include junit tests. |
| <code><a href="#projen-projects.JavaProjectOptions.property.junitOptions">junitOptions</a></code> | <code>projen.java.JunitOptions</code> | junit options. |
| <code><a href="#projen-projects.JavaProjectOptions.property.packagingOptions">packagingOptions</a></code> | <code>projen.java.MavenPackagingOptions</code> | Packaging options. |
| <code><a href="#projen-projects.JavaProjectOptions.property.projenrcJava">projenrcJava</a></code> | <code>boolean</code> | Use projenrc in java. |
| <code><a href="#projen-projects.JavaProjectOptions.property.projenrcJavaOptions">projenrcJavaOptions</a></code> | <code>projen.java.ProjenrcOptions</code> | Options related to projenrc in java. |
| <code><a href="#projen-projects.JavaProjectOptions.property.testDeps">testDeps</a></code> | <code>string[]</code> | List of test dependencies for this project. |
| <code><a href="#projen-projects.JavaProjectOptions.property.sample">sample</a></code> | <code>boolean</code> | Include sample code and test if the relevant directories don't exist. |
| <code><a href="#projen-projects.JavaProjectOptions.property.sampleJavaPackage">sampleJavaPackage</a></code> | <code>string</code> | The java package to use for the code sample. |
| <code><a href="#projen-projects.JavaProjectOptions.property.snykOptions">snykOptions</a></code> | <code><a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-projects.JavaProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-projects.JavaProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-projects.JavaProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-projects.JavaProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-projects.JavaProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-projects.JavaProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-projects.JavaProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-projects.JavaProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-projects.JavaProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-projects.JavaProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-projects.JavaProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-projects.JavaProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-projects.JavaProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-projects.JavaProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-projects.JavaProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-projects.JavaProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-projects.JavaProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-projects.JavaProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-projects.JavaProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-projects.JavaProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-projects.JavaProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-projects.JavaProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-projects.JavaProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-projects.JavaProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-projects.JavaProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-projects.JavaProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="projen-projects.JavaProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-projects.JavaProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-projects.JavaProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="projen-projects.JavaProjectOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string
- *Default:* "my-app"

The artifactId is generally the name that the project is known by.

Although
the groupId is important, people within the group will rarely mention the
groupId in discussion (they are often all be the same ID, such as the
MojoHaus project groupId: org.codehaus.mojo). It, along with the groupId,
creates a key that separates this project from every other project in the
world (at least, it should :) ). Along with the groupId, the artifactId
fully defines the artifact's living quarters within the repository. In the
case of the above project, my-project lives in
$M2_REPO/org/codehaus/mojo/my-project.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="projen-projects.JavaProjectOptions.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string
- *Default:* "org.acme"

This is generally unique amongst an organization or a project.

For example,
all core Maven artifacts do (well, should) live under the groupId
org.apache.maven. Group ID's do not necessarily use the dot notation, for
example, the junit project. Note that the dot-notated groupId does not have
to correspond to the package structure that the project contains. It is,
however, a good practice to follow. When stored within a repository, the
group acts much like the Java packaging structure does in an operating
system. The dots are replaced by OS specific directory separators (such as
'/' in Unix) which becomes a relative directory structure from the base
repository. In the example given, the org.codehaus.mojo group lives within
the directory $M2_REPO/org/codehaus/mojo.

---

##### `version`<sup>Required</sup> <a name="version" id="projen-projects.JavaProjectOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

This is the last piece of the naming puzzle.

groupId:artifactId denotes a
single project but they cannot delineate which incarnation of that project
we are talking about. Do we want the junit:junit of 2018 (version 4.12), or
of 2007 (version 3.8.2)? In short: code changes, those changes should be
versioned, and this element keeps those versions in line. It is also used
within an artifact's repository to separate versions from each other.
my-project version 1.0 files live in the directory structure
$M2_REPO/org/codehaus/mojo/my-project/1.0.

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-projects.JavaProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

Description of a project is always good.

Although this should not replace
formal documentation, a quick comment to any readers of the POM is always
helpful.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="projen-projects.JavaProjectOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

Project packaging format.

---

##### `parentPom`<sup>Optional</sup> <a name="parentPom" id="projen-projects.JavaProjectOptions.property.parentPom"></a>

```typescript
public readonly parentPom: ParentPom;
```

- *Type:* projen.java.ParentPom
- *Default:* undefined

A Parent Pom can be used to have a child project inherit properties/plugins/ect in order to reduce duplication and keep standards across a large amount of repos.

---

##### `url`<sup>Optional</sup> <a name="url" id="projen-projects.JavaProjectOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* undefined

The URL, like the name, is not required.

This is a nice gesture for
projects users, however, so that they know where the project lives.

---

##### `compileOptions`<sup>Optional</sup> <a name="compileOptions" id="projen-projects.JavaProjectOptions.property.compileOptions"></a>

```typescript
public readonly compileOptions: MavenCompileOptions;
```

- *Type:* projen.java.MavenCompileOptions
- *Default:* defaults

Compile options.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-projects.JavaProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

List of runtime dependencies for this project.

Dependencies use the format: `<groupId>/<artifactId>@<semver>`

Additional dependencies can be added via `project.addDependency()`.

---

##### `distdir`<sup>Optional</sup> <a name="distdir" id="projen-projects.JavaProjectOptions.property.distdir"></a>

```typescript
public readonly distdir: string;
```

- *Type:* string
- *Default:* "dist/java"

Final artifact output directory.

---

##### `junit`<sup>Optional</sup> <a name="junit" id="projen-projects.JavaProjectOptions.property.junit"></a>

```typescript
public readonly junit: boolean;
```

- *Type:* boolean
- *Default:* true

Include junit tests.

---

##### `junitOptions`<sup>Optional</sup> <a name="junitOptions" id="projen-projects.JavaProjectOptions.property.junitOptions"></a>

```typescript
public readonly junitOptions: JunitOptions;
```

- *Type:* projen.java.JunitOptions
- *Default:* defaults

junit options.

---

##### `packagingOptions`<sup>Optional</sup> <a name="packagingOptions" id="projen-projects.JavaProjectOptions.property.packagingOptions"></a>

```typescript
public readonly packagingOptions: MavenPackagingOptions;
```

- *Type:* projen.java.MavenPackagingOptions
- *Default:* defaults

Packaging options.

---

##### `projenrcJava`<sup>Optional</sup> <a name="projenrcJava" id="projen-projects.JavaProjectOptions.property.projenrcJava"></a>

```typescript
public readonly projenrcJava: boolean;
```

- *Type:* boolean
- *Default:* true

Use projenrc in java.

This will install `projen` as a java dependency and will add a `synth` task which
will compile & execute `main()` from `src/main/java/projenrc.java`.

---

##### `projenrcJavaOptions`<sup>Optional</sup> <a name="projenrcJavaOptions" id="projen-projects.JavaProjectOptions.property.projenrcJavaOptions"></a>

```typescript
public readonly projenrcJavaOptions: ProjenrcOptions;
```

- *Type:* projen.java.ProjenrcOptions
- *Default:* default options

Options related to projenrc in java.

---

##### `testDeps`<sup>Optional</sup> <a name="testDeps" id="projen-projects.JavaProjectOptions.property.testDeps"></a>

```typescript
public readonly testDeps: string[];
```

- *Type:* string[]
- *Default:* []

List of test dependencies for this project.

Dependencies use the format: `<groupId>/<artifactId>@<semver>`

Additional dependencies can be added via `project.addTestDependency()`.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="projen-projects.JavaProjectOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* true

Include sample code and test if the relevant directories don't exist.

---

##### `sampleJavaPackage`<sup>Optional</sup> <a name="sampleJavaPackage" id="projen-projects.JavaProjectOptions.property.sampleJavaPackage"></a>

```typescript
public readonly sampleJavaPackage: string;
```

- *Type:* string
- *Default:* "org.acme"

The java package to use for the code sample.

---

##### `snykOptions`<sup>Required</sup> <a name="snykOptions" id="projen-projects.JavaProjectOptions.property.snykOptions"></a>

```typescript
public readonly snykOptions: SnykComponentOptions;
```

- *Type:* <a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a>

---

### JSIIProjectOptions <a name="JSIIProjectOptions" id="projen-projects.JSIIProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.JSIIProjectOptions.Initializer"></a>

```typescript
import { JSIIProjectOptions } from 'projen-projects'

const jSIIProjectOptions: JSIIProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.JSIIProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen-projects.JSIIProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.dotnet">dotnet</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProjectOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#projen-projects.JSIIProjectOptions.property.python">python</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProjectOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.JSIIProjectOptions.property.snykOptions">snykOptions</a></code> | <code><a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-projects.JSIIProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-projects.JSIIProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-projects.JSIIProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-projects.JSIIProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-projects.JSIIProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-projects.JSIIProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-projects.JSIIProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-projects.JSIIProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-projects.JSIIProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-projects.JSIIProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-projects.JSIIProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-projects.JSIIProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-projects.JSIIProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-projects.JSIIProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-projects.JSIIProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-projects.JSIIProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-projects.JSIIProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-projects.JSIIProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-projects.JSIIProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-projects.JSIIProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-projects.JSIIProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-projects.JSIIProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-projects.JSIIProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-projects.JSIIProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-projects.JSIIProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-projects.JSIIProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="projen-projects.JSIIProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-projects.JSIIProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-projects.JSIIProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen-projects.JSIIProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen-projects.JSIIProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen-projects.JSIIProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen-projects.JSIIProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen-projects.JSIIProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen-projects.JSIIProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen-projects.JSIIProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen-projects.JSIIProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen-projects.JSIIProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen-projects.JSIIProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen-projects.JSIIProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-projects.JSIIProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="projen-projects.JSIIProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-projects.JSIIProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-projects.JSIIProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-projects.JSIIProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen-projects.JSIIProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-projects.JSIIProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen-projects.JSIIProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-projects.JSIIProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-projects.JSIIProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen-projects.JSIIProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen-projects.JSIIProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen-projects.JSIIProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen-projects.JSIIProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen-projects.JSIIProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen-projects.JSIIProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-projects.JSIIProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen-projects.JSIIProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen-projects.JSIIProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen-projects.JSIIProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen-projects.JSIIProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen-projects.JSIIProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen-projects.JSIIProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen-projects.JSIIProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen-projects.JSIIProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen-projects.JSIIProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen-projects.JSIIProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen-projects.JSIIProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen-projects.JSIIProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen-projects.JSIIProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen-projects.JSIIProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen-projects.JSIIProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen-projects.JSIIProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen-projects.JSIIProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen-projects.JSIIProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen-projects.JSIIProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen-projects.JSIIProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen-projects.JSIIProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen-projects.JSIIProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen-projects.JSIIProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen-projects.JSIIProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen-projects.JSIIProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen-projects.JSIIProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen-projects.JSIIProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen-projects.JSIIProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen-projects.JSIIProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen-projects.JSIIProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen-projects.JSIIProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen-projects.JSIIProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen-projects.JSIIProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen-projects.JSIIProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-projects.JSIIProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen-projects.JSIIProjectOptions.property.buildWorkflowTriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen-projects.JSIIProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen-projects.JSIIProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen-projects.JSIIProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen-projects.JSIIProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen-projects.JSIIProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen-projects.JSIIProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen-projects.JSIIProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen-projects.JSIIProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen-projects.JSIIProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen-projects.JSIIProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen-projects.JSIIProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-projects.JSIIProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen-projects.JSIIProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="projen-projects.JSIIProjectOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen-projects.JSIIProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen-projects.JSIIProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen-projects.JSIIProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen-projects.JSIIProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-projects.JSIIProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen-projects.JSIIProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen-projects.JSIIProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-projects.JSIIProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-projects.JSIIProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen-projects.JSIIProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-projects.JSIIProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-projects.JSIIProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-projects.JSIIProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen-projects.JSIIProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen-projects.JSIIProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen-projects.JSIIProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen-projects.JSIIProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen-projects.JSIIProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen-projects.JSIIProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen-projects.JSIIProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen-projects.JSIIProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-projects.JSIIProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen-projects.JSIIProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen-projects.JSIIProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-projects.JSIIProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen-projects.JSIIProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen-projects.JSIIProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-projects.JSIIProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-projects.JSIIProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen-projects.JSIIProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen-projects.JSIIProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen-projects.JSIIProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-projects.JSIIProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen-projects.JSIIProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen-projects.JSIIProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen-projects.JSIIProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen-projects.JSIIProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `author`<sup>Required</sup> <a name="author" id="projen-projects.JSIIProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="projen-projects.JSIIProjectOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="projen-projects.JSIIProjectOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="projen-projects.JSIIProjectOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="projen-projects.JSIIProjectOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="projen-projects.JSIIProjectOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="projen-projects.JSIIProjectOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="projen-projects.JSIIProjectOptions.property.dotnet"></a>

- *Deprecated:* use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="projen-projects.JSIIProjectOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- *Type:* string[]

Accepts a list of glob patterns.

Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="projen-projects.JSIIProjectOptions.property.jsiiVersion"></a>

```typescript
public readonly jsiiVersion: string;
```

- *Type:* string
- *Default:* "1.x"

Version of the jsii compiler to use.

Set to "*" if you want to manually manage the version of jsii in your
project by managing updates to `package.json` on your own.

NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
and should remain on the same minor, so we recommend using a `~` dependency
(e.g. `~5.0.0`).

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="projen-projects.JSIIProjectOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="projen-projects.JSIIProjectOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="projen-projects.JSIIProjectOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="projen-projects.JSIIProjectOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="projen-projects.JSIIProjectOptions.property.python"></a>

- *Deprecated:* use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="projen-projects.JSIIProjectOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `snykOptions`<sup>Required</sup> <a name="snykOptions" id="projen-projects.JSIIProjectOptions.property.snykOptions"></a>

```typescript
public readonly snykOptions: SnykComponentOptions;
```

- *Type:* <a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a>

---

### PythonProjectOptions <a name="PythonProjectOptions" id="projen-projects.PythonProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.PythonProjectOptions.Initializer"></a>

```typescript
import { PythonProjectOptions } from 'projen-projects'

const pythonProjectOptions: PythonProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.PythonProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-projects.PythonProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-projects.PythonProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-projects.PythonProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-projects.PythonProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-projects.PythonProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen-projects.PythonProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-projects.PythonProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-projects.PythonProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-projects.PythonProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen-projects.PythonProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen-projects.PythonProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen-projects.PythonProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen-projects.PythonProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen-projects.PythonProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen-projects.PythonProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen-projects.PythonProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen-projects.PythonProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen-projects.PythonProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen-projects.PythonProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen-projects.PythonProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen-projects.PythonProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen-projects.PythonProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen-projects.PythonProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen-projects.PythonProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen-projects.PythonProjectOptions.property.version">version</a></code> | <code>string</code> | Version of the package. |
| <code><a href="#projen-projects.PythonProjectOptions.property.classifiers">classifiers</a></code> | <code>string[]</code> | A list of PyPI trove classifiers that describe the project. |
| <code><a href="#projen-projects.PythonProjectOptions.property.description">description</a></code> | <code>string</code> | A short description of the package. |
| <code><a href="#projen-projects.PythonProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | A URL to the website of the project. |
| <code><a href="#projen-projects.PythonProjectOptions.property.license">license</a></code> | <code>string</code> | License of this package as an SPDX identifier. |
| <code><a href="#projen-projects.PythonProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | Package name. |
| <code><a href="#projen-projects.PythonProjectOptions.property.poetryOptions">poetryOptions</a></code> | <code>projen.python.PoetryPyprojectOptionsWithoutDeps</code> | Additional options to set for poetry if using poetry. |
| <code><a href="#projen-projects.PythonProjectOptions.property.setupConfig">setupConfig</a></code> | <code>{[ key: string ]: any}</code> | Additional fields to pass in the setup() function if using setuptools. |
| <code><a href="#projen-projects.PythonProjectOptions.property.pythonExec">pythonExec</a></code> | <code>string</code> | Path to the python executable to use. |
| <code><a href="#projen-projects.PythonProjectOptions.property.moduleName">moduleName</a></code> | <code>string</code> | Name of the python package as used in imports and filenames. |
| <code><a href="#projen-projects.PythonProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | List of runtime dependencies for this project. |
| <code><a href="#projen-projects.PythonProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | List of dev dependencies for this project. |
| <code><a href="#projen-projects.PythonProjectOptions.property.pip">pip</a></code> | <code>boolean</code> | Use pip with a requirements.txt file to track project dependencies. |
| <code><a href="#projen-projects.PythonProjectOptions.property.poetry">poetry</a></code> | <code>boolean</code> | Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Use projenrc in javascript. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options related to projenrc in JavaScript. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenrcPython">projenrcPython</a></code> | <code>boolean</code> | Use projenrc in Python. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenrcPythonOptions">projenrcPythonOptions</a></code> | <code>projen.python.ProjenrcOptions</code> | Options related to projenrc in python. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use projenrc in TypeScript. |
| <code><a href="#projen-projects.PythonProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcTsOptions</code> | Options related to projenrc in TypeScript. |
| <code><a href="#projen-projects.PythonProjectOptions.property.pytest">pytest</a></code> | <code>boolean</code> | Include pytest tests. |
| <code><a href="#projen-projects.PythonProjectOptions.property.pytestOptions">pytestOptions</a></code> | <code>projen.python.PytestOptions</code> | pytest options. |
| <code><a href="#projen-projects.PythonProjectOptions.property.sample">sample</a></code> | <code>boolean</code> | Include sample code and test if the relevant directories don't exist. |
| <code><a href="#projen-projects.PythonProjectOptions.property.setuptools">setuptools</a></code> | <code>boolean</code> | Use setuptools with a setup.py script for packaging and publishing. |
| <code><a href="#projen-projects.PythonProjectOptions.property.venv">venv</a></code> | <code>boolean</code> | Use venv to manage a virtual environment for installing dependencies inside. |
| <code><a href="#projen-projects.PythonProjectOptions.property.venvOptions">venvOptions</a></code> | <code>projen.python.VenvOptions</code> | Venv options. |
| <code><a href="#projen-projects.PythonProjectOptions.property.snykOptions">snykOptions</a></code> | <code><a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-projects.PythonProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-projects.PythonProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-projects.PythonProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-projects.PythonProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-projects.PythonProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-projects.PythonProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-projects.PythonProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-projects.PythonProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-projects.PythonProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-projects.PythonProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-projects.PythonProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-projects.PythonProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-projects.PythonProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-projects.PythonProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-projects.PythonProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-projects.PythonProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-projects.PythonProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-projects.PythonProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-projects.PythonProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-projects.PythonProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-projects.PythonProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-projects.PythonProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-projects.PythonProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-projects.PythonProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-projects.PythonProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-projects.PythonProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="projen-projects.PythonProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-projects.PythonProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-projects.PythonProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="projen-projects.PythonProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Author's e-mail.

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="projen-projects.PythonProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

Author's name.

---

##### `version`<sup>Required</sup> <a name="version" id="projen-projects.PythonProjectOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

Version of the package.

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="projen-projects.PythonProjectOptions.property.classifiers"></a>

```typescript
public readonly classifiers: string[];
```

- *Type:* string[]

A list of PyPI trove classifiers that describe the project.

> [https://pypi.org/classifiers/](https://pypi.org/classifiers/)

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-projects.PythonProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the package.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-projects.PythonProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

A URL to the website of the project.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-projects.PythonProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

License of this package as an SPDX identifier.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-projects.PythonProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Package name.

---

##### `poetryOptions`<sup>Optional</sup> <a name="poetryOptions" id="projen-projects.PythonProjectOptions.property.poetryOptions"></a>

```typescript
public readonly poetryOptions: PoetryPyprojectOptionsWithoutDeps;
```

- *Type:* projen.python.PoetryPyprojectOptionsWithoutDeps

Additional options to set for poetry if using poetry.

---

##### `setupConfig`<sup>Optional</sup> <a name="setupConfig" id="projen-projects.PythonProjectOptions.property.setupConfig"></a>

```typescript
public readonly setupConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Additional fields to pass in the setup() function if using setuptools.

---

##### `pythonExec`<sup>Optional</sup> <a name="pythonExec" id="projen-projects.PythonProjectOptions.property.pythonExec"></a>

```typescript
public readonly pythonExec: string;
```

- *Type:* string
- *Default:* "python"

Path to the python executable to use.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="projen-projects.PythonProjectOptions.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string
- *Default:* $PYTHON_MODULE_NAME

Name of the python package as used in imports and filenames.

Must only consist of alphanumeric characters and underscores.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-projects.PythonProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

List of runtime dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDependency()`.

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-projects.PythonProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

List of dev dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDevDependency()`.

---

##### `pip`<sup>Optional</sup> <a name="pip" id="projen-projects.PythonProjectOptions.property.pip"></a>

```typescript
public readonly pip: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use pip with a requirements.txt file to track project dependencies.

---

##### `poetry`<sup>Optional</sup> <a name="poetry" id="projen-projects.PythonProjectOptions.property.poetry"></a>

```typescript
public readonly poetry: boolean;
```

- *Type:* boolean
- *Default:* false

Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing.

This feature is incompatible with pip, setuptools, or venv.
If you set this option to `true`, then pip, setuptools, and venv must be set to `false`.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-projects.PythonProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in javascript.

This will install `projen` as a JavaScript dependency and add a `synth`
task which will run `.projenrc.js`.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-projects.PythonProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options related to projenrc in JavaScript.

---

##### `projenrcPython`<sup>Optional</sup> <a name="projenrcPython" id="projen-projects.PythonProjectOptions.property.projenrcPython"></a>

```typescript
public readonly projenrcPython: boolean;
```

- *Type:* boolean
- *Default:* true

Use projenrc in Python.

This will install `projen` as a Python dependency and add a `synth`
task which will run `.projenrc.py`.

---

##### `projenrcPythonOptions`<sup>Optional</sup> <a name="projenrcPythonOptions" id="projen-projects.PythonProjectOptions.property.projenrcPythonOptions"></a>

```typescript
public readonly projenrcPythonOptions: ProjenrcOptions;
```

- *Type:* projen.python.ProjenrcOptions
- *Default:* default options

Options related to projenrc in python.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-projects.PythonProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in TypeScript.

This will create a tsconfig file (default: `tsconfig.projen.json`)
and use `ts-node` in the default task to parse the project source files.

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-projects.PythonProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcTsOptions;
```

- *Type:* projen.typescript.ProjenrcTsOptions
- *Default:* default options

Options related to projenrc in TypeScript.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="projen-projects.PythonProjectOptions.property.pytest"></a>

```typescript
public readonly pytest: boolean;
```

- *Type:* boolean
- *Default:* true

Include pytest tests.

---

##### `pytestOptions`<sup>Optional</sup> <a name="pytestOptions" id="projen-projects.PythonProjectOptions.property.pytestOptions"></a>

```typescript
public readonly pytestOptions: PytestOptions;
```

- *Type:* projen.python.PytestOptions
- *Default:* defaults

pytest options.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="projen-projects.PythonProjectOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* true

Include sample code and test if the relevant directories don't exist.

---

##### `setuptools`<sup>Optional</sup> <a name="setuptools" id="projen-projects.PythonProjectOptions.property.setuptools"></a>

```typescript
public readonly setuptools: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use setuptools with a setup.py script for packaging and publishing.

---

##### `venv`<sup>Optional</sup> <a name="venv" id="projen-projects.PythonProjectOptions.property.venv"></a>

```typescript
public readonly venv: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use venv to manage a virtual environment for installing dependencies inside.

---

##### `venvOptions`<sup>Optional</sup> <a name="venvOptions" id="projen-projects.PythonProjectOptions.property.venvOptions"></a>

```typescript
public readonly venvOptions: VenvOptions;
```

- *Type:* projen.python.VenvOptions
- *Default:* defaults

Venv options.

---

##### `snykOptions`<sup>Required</sup> <a name="snykOptions" id="projen-projects.PythonProjectOptions.property.snykOptions"></a>

```typescript
public readonly snykOptions: SnykComponentOptions;
```

- *Type:* <a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a>

---

### RunScaOptions <a name="RunScaOptions" id="projen-projects.RunScaOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.RunScaOptions.Initializer"></a>

```typescript
import { RunScaOptions } from 'projen-projects'

const runScaOptions: RunScaOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.RunScaOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-projects.RunScaOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-projects.RunScaOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-projects.RunScaOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-projects.RunScaOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-projects.RunScaOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen-projects.RunScaOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen-projects.RunScaOptions.property.args">args</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.RunScaOptions.property.resultPathOutputId">resultPathOutputId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.RunScaOptions.property.severityThreshold">severityThreshold</a></code> | <code>string</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-projects.RunScaOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-projects.RunScaOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-projects.RunScaOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-projects.RunScaOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-projects.RunScaOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen-projects.RunScaOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen-projects.RunScaOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `args`<sup>Optional</sup> <a name="args" id="projen-projects.RunScaOptions.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

---

##### `resultPathOutputId`<sup>Optional</sup> <a name="resultPathOutputId" id="projen-projects.RunScaOptions.property.resultPathOutputId"></a>

```typescript
public readonly resultPathOutputId: string;
```

- *Type:* string

---

##### `severityThreshold`<sup>Optional</sup> <a name="severityThreshold" id="projen-projects.RunScaOptions.property.severityThreshold"></a>

```typescript
public readonly severityThreshold: string;
```

- *Type:* string

---

### RunSnykPrDiffOptions <a name="RunSnykPrDiffOptions" id="projen-projects.RunSnykPrDiffOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.RunSnykPrDiffOptions.Initializer"></a>

```typescript
import { RunSnykPrDiffOptions } from 'projen-projects'

const runSnykPrDiffOptions: RunSnykPrDiffOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.RunSnykPrDiffOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-projects.RunSnykPrDiffOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-projects.RunSnykPrDiffOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-projects.RunSnykPrDiffOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-projects.RunSnykPrDiffOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-projects.RunSnykPrDiffOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen-projects.RunSnykPrDiffOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen-projects.RunSnykPrDiffOptions.property.snykCodeBaselinePath">snykCodeBaselinePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.RunSnykPrDiffOptions.property.snykCodeCurrentPath">snykCodeCurrentPath</a></code> | <code>string</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-projects.RunSnykPrDiffOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-projects.RunSnykPrDiffOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-projects.RunSnykPrDiffOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-projects.RunSnykPrDiffOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-projects.RunSnykPrDiffOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen-projects.RunSnykPrDiffOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen-projects.RunSnykPrDiffOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `snykCodeBaselinePath`<sup>Required</sup> <a name="snykCodeBaselinePath" id="projen-projects.RunSnykPrDiffOptions.property.snykCodeBaselinePath"></a>

```typescript
public readonly snykCodeBaselinePath: string;
```

- *Type:* string

---

##### `snykCodeCurrentPath`<sup>Required</sup> <a name="snykCodeCurrentPath" id="projen-projects.RunSnykPrDiffOptions.property.snykCodeCurrentPath"></a>

```typescript
public readonly snykCodeCurrentPath: string;
```

- *Type:* string

---

### RunSnykSastOptions <a name="RunSnykSastOptions" id="projen-projects.RunSnykSastOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.RunSnykSastOptions.Initializer"></a>

```typescript
import { RunSnykSastOptions } from 'projen-projects'

const runSnykSastOptions: RunSnykSastOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.RunSnykSastOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-projects.RunSnykSastOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-projects.RunSnykSastOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-projects.RunSnykSastOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-projects.RunSnykSastOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-projects.RunSnykSastOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen-projects.RunSnykSastOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen-projects.RunSnykSastOptions.property.authenticateSnykOptions">authenticateSnykOptions</a></code> | <code><a href="#projen-projects.AuthenticateSnykOptions">AuthenticateSnykOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.RunSnykSastOptions.property.severityThreshold">severityThreshold</a></code> | <code>string</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-projects.RunSnykSastOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-projects.RunSnykSastOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-projects.RunSnykSastOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-projects.RunSnykSastOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-projects.RunSnykSastOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen-projects.RunSnykSastOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen-projects.RunSnykSastOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `authenticateSnykOptions`<sup>Required</sup> <a name="authenticateSnykOptions" id="projen-projects.RunSnykSastOptions.property.authenticateSnykOptions"></a>

```typescript
public readonly authenticateSnykOptions: AuthenticateSnykOptions;
```

- *Type:* <a href="#projen-projects.AuthenticateSnykOptions">AuthenticateSnykOptions</a>

---

##### `severityThreshold`<sup>Optional</sup> <a name="severityThreshold" id="projen-projects.RunSnykSastOptions.property.severityThreshold"></a>

```typescript
public readonly severityThreshold: string;
```

- *Type:* string

---

### RunSnykScaWithDeltaOptions <a name="RunSnykScaWithDeltaOptions" id="projen-projects.RunSnykScaWithDeltaOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.RunSnykScaWithDeltaOptions.Initializer"></a>

```typescript
import { RunSnykScaWithDeltaOptions } from 'projen-projects'

const runSnykScaWithDeltaOptions: RunSnykScaWithDeltaOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.authenticateSnykOptions">authenticateSnykOptions</a></code> | <code><a href="#projen-projects.AuthenticateSnykOptions">AuthenticateSnykOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.snykMonitoredProjectId">snykMonitoredProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.debug">debug</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.delta">delta</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.runScaOptions">runScaOptions</a></code> | <code><a href="#projen-projects.RunScaOptions">RunScaOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.RunSnykScaWithDeltaOptions.property.severityThreshold">severityThreshold</a></code> | <code>string</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-projects.RunSnykScaWithDeltaOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-projects.RunSnykScaWithDeltaOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-projects.RunSnykScaWithDeltaOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-projects.RunSnykScaWithDeltaOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-projects.RunSnykScaWithDeltaOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen-projects.RunSnykScaWithDeltaOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen-projects.RunSnykScaWithDeltaOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `authenticateSnykOptions`<sup>Required</sup> <a name="authenticateSnykOptions" id="projen-projects.RunSnykScaWithDeltaOptions.property.authenticateSnykOptions"></a>

```typescript
public readonly authenticateSnykOptions: AuthenticateSnykOptions;
```

- *Type:* <a href="#projen-projects.AuthenticateSnykOptions">AuthenticateSnykOptions</a>

---

##### `snykMonitoredProjectId`<sup>Required</sup> <a name="snykMonitoredProjectId" id="projen-projects.RunSnykScaWithDeltaOptions.property.snykMonitoredProjectId"></a>

```typescript
public readonly snykMonitoredProjectId: string;
```

- *Type:* string

---

##### `debug`<sup>Optional</sup> <a name="debug" id="projen-projects.RunSnykScaWithDeltaOptions.property.debug"></a>

```typescript
public readonly debug: boolean;
```

- *Type:* boolean

---

##### `delta`<sup>Optional</sup> <a name="delta" id="projen-projects.RunSnykScaWithDeltaOptions.property.delta"></a>

```typescript
public readonly delta: boolean;
```

- *Type:* boolean

---

##### `runScaOptions`<sup>Optional</sup> <a name="runScaOptions" id="projen-projects.RunSnykScaWithDeltaOptions.property.runScaOptions"></a>

```typescript
public readonly runScaOptions: RunScaOptions;
```

- *Type:* <a href="#projen-projects.RunScaOptions">RunScaOptions</a>

---

##### `severityThreshold`<sup>Optional</sup> <a name="severityThreshold" id="projen-projects.RunSnykScaWithDeltaOptions.property.severityThreshold"></a>

```typescript
public readonly severityThreshold: string;
```

- *Type:* string

---

### SecurityScanWorkflowOptions <a name="SecurityScanWorkflowOptions" id="projen-projects.SecurityScanWorkflowOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.SecurityScanWorkflowOptions.Initializer"></a>

```typescript
import { SecurityScanWorkflowOptions } from 'projen-projects'

const securityScanWorkflowOptions: SecurityScanWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SecurityScanWorkflowOptions.property.triggersOptions">triggersOptions</a></code> | <code>projen.github.workflows.Triggers</code> | *No description.* |
| <code><a href="#projen-projects.SecurityScanWorkflowOptions.property.workflowOptions">workflowOptions</a></code> | <code>projen.github.GithubWorkflowOptions</code> | *No description.* |

---

##### `triggersOptions`<sup>Optional</sup> <a name="triggersOptions" id="projen-projects.SecurityScanWorkflowOptions.property.triggersOptions"></a>

```typescript
public readonly triggersOptions: Triggers;
```

- *Type:* projen.github.workflows.Triggers

---

##### `workflowOptions`<sup>Optional</sup> <a name="workflowOptions" id="projen-projects.SecurityScanWorkflowOptions.property.workflowOptions"></a>

```typescript
public readonly workflowOptions: GithubWorkflowOptions;
```

- *Type:* projen.github.GithubWorkflowOptions

---

### SetupNodeOptions <a name="SetupNodeOptions" id="projen-projects.SetupNodeOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.SetupNodeOptions.Initializer"></a>

```typescript
import { SetupNodeOptions } from 'projen-projects'

const setupNodeOptions: SetupNodeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SetupNodeOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-projects.SetupNodeOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-projects.SetupNodeOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-projects.SetupNodeOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-projects.SetupNodeOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-projects.SetupNodeOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen-projects.SetupNodeOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen-projects.SetupNodeOptions.property.nodeVersion">nodeVersion</a></code> | <code>number</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-projects.SetupNodeOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-projects.SetupNodeOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-projects.SetupNodeOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-projects.SetupNodeOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-projects.SetupNodeOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen-projects.SetupNodeOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen-projects.SetupNodeOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="projen-projects.SetupNodeOptions.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: number;
```

- *Type:* number

---

### SnykComponentOptions <a name="SnykComponentOptions" id="projen-projects.SnykComponentOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.SnykComponentOptions.Initializer"></a>

```typescript
import { SnykComponentOptions } from 'projen-projects'

const snykComponentOptions: SnykComponentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykComponentOptions.property.enableSast">enableSast</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.SnykComponentOptions.property.enableSca">enableSca</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.SnykComponentOptions.property.securityScanWorkflowOptions">securityScanWorkflowOptions</a></code> | <code><a href="#projen-projects.SecurityScanWorkflowOptions">SecurityScanWorkflowOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykComponentOptions.property.snykMonitoredProjectId">snykMonitoredProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.SnykComponentOptions.property.snykOrgId">snykOrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.SnykComponentOptions.property.snykSastWorkflowOptions">snykSastWorkflowOptions</a></code> | <code><a href="#projen-projects.SnykSastWorkflowOptions">SnykSastWorkflowOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykComponentOptions.property.snykScaWorkflowOptions">snykScaWorkflowOptions</a></code> | <code><a href="#projen-projects.SnykScaWorkflowOptions">SnykScaWorkflowOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykComponentOptions.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |

---

##### `enableSast`<sup>Optional</sup> <a name="enableSast" id="projen-projects.SnykComponentOptions.property.enableSast"></a>

```typescript
public readonly enableSast: boolean;
```

- *Type:* boolean

---

##### `enableSca`<sup>Optional</sup> <a name="enableSca" id="projen-projects.SnykComponentOptions.property.enableSca"></a>

```typescript
public readonly enableSca: boolean;
```

- *Type:* boolean

---

##### `securityScanWorkflowOptions`<sup>Optional</sup> <a name="securityScanWorkflowOptions" id="projen-projects.SnykComponentOptions.property.securityScanWorkflowOptions"></a>

```typescript
public readonly securityScanWorkflowOptions: SecurityScanWorkflowOptions;
```

- *Type:* <a href="#projen-projects.SecurityScanWorkflowOptions">SecurityScanWorkflowOptions</a>

---

##### `snykMonitoredProjectId`<sup>Optional</sup> <a name="snykMonitoredProjectId" id="projen-projects.SnykComponentOptions.property.snykMonitoredProjectId"></a>

```typescript
public readonly snykMonitoredProjectId: string;
```

- *Type:* string

---

##### `snykOrgId`<sup>Optional</sup> <a name="snykOrgId" id="projen-projects.SnykComponentOptions.property.snykOrgId"></a>

```typescript
public readonly snykOrgId: string;
```

- *Type:* string

---

##### `snykSastWorkflowOptions`<sup>Optional</sup> <a name="snykSastWorkflowOptions" id="projen-projects.SnykComponentOptions.property.snykSastWorkflowOptions"></a>

```typescript
public readonly snykSastWorkflowOptions: SnykSastWorkflowOptions;
```

- *Type:* <a href="#projen-projects.SnykSastWorkflowOptions">SnykSastWorkflowOptions</a>

---

##### `snykScaWorkflowOptions`<sup>Optional</sup> <a name="snykScaWorkflowOptions" id="projen-projects.SnykComponentOptions.property.snykScaWorkflowOptions"></a>

```typescript
public readonly snykScaWorkflowOptions: SnykScaWorkflowOptions;
```

- *Type:* <a href="#projen-projects.SnykScaWorkflowOptions">SnykScaWorkflowOptions</a>

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="projen-projects.SnykComponentOptions.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

### SnykReusableWorkflowOptions <a name="SnykReusableWorkflowOptions" id="projen-projects.SnykReusableWorkflowOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.SnykReusableWorkflowOptions.Initializer"></a>

```typescript
import { SnykReusableWorkflowOptions } from 'projen-projects'

const snykReusableWorkflowOptions: SnykReusableWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykReusableWorkflowOptions.property.installSnykOptions">installSnykOptions</a></code> | <code><a href="#projen-projects.InstallSnykOptions">InstallSnykOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykReusableWorkflowOptions.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.SnykReusableWorkflowOptions.property.jobOptions">jobOptions</a></code> | <code>projen.github.workflows.Job</code> | *No description.* |
| <code><a href="#projen-projects.SnykReusableWorkflowOptions.property.setupNodeOptions">setupNodeOptions</a></code> | <code><a href="#projen-projects.SetupNodeOptions">SetupNodeOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykReusableWorkflowOptions.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.SnykReusableWorkflowOptions.property.workflowOptions">workflowOptions</a></code> | <code>projen.github.GithubWorkflowOptions</code> | *No description.* |

---

##### `installSnykOptions`<sup>Optional</sup> <a name="installSnykOptions" id="projen-projects.SnykReusableWorkflowOptions.property.installSnykOptions"></a>

```typescript
public readonly installSnykOptions: InstallSnykOptions;
```

- *Type:* <a href="#projen-projects.InstallSnykOptions">InstallSnykOptions</a>

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="projen-projects.SnykReusableWorkflowOptions.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `jobOptions`<sup>Optional</sup> <a name="jobOptions" id="projen-projects.SnykReusableWorkflowOptions.property.jobOptions"></a>

```typescript
public readonly jobOptions: Job;
```

- *Type:* projen.github.workflows.Job

---

##### `setupNodeOptions`<sup>Optional</sup> <a name="setupNodeOptions" id="projen-projects.SnykReusableWorkflowOptions.property.setupNodeOptions"></a>

```typescript
public readonly setupNodeOptions: SetupNodeOptions;
```

- *Type:* <a href="#projen-projects.SetupNodeOptions">SetupNodeOptions</a>

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="projen-projects.SnykReusableWorkflowOptions.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

##### `workflowOptions`<sup>Optional</sup> <a name="workflowOptions" id="projen-projects.SnykReusableWorkflowOptions.property.workflowOptions"></a>

```typescript
public readonly workflowOptions: GithubWorkflowOptions;
```

- *Type:* projen.github.GithubWorkflowOptions

---

### SnykSastWorkflowOptions <a name="SnykSastWorkflowOptions" id="projen-projects.SnykSastWorkflowOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.SnykSastWorkflowOptions.Initializer"></a>

```typescript
import { SnykSastWorkflowOptions } from 'projen-projects'

const snykSastWorkflowOptions: SnykSastWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.installSnykOptions">installSnykOptions</a></code> | <code><a href="#projen-projects.InstallSnykOptions">InstallSnykOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.jobOptions">jobOptions</a></code> | <code>projen.github.workflows.Job</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.setupNodeOptions">setupNodeOptions</a></code> | <code><a href="#projen-projects.SetupNodeOptions">SetupNodeOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.workflowOptions">workflowOptions</a></code> | <code>projen.github.GithubWorkflowOptions</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.authenticateSnykOptions">authenticateSnykOptions</a></code> | <code><a href="#projen-projects.AuthenticateSnykOptions">AuthenticateSnykOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.checkoutBaselineOptions">checkoutBaselineOptions</a></code> | <code>projen.github.CheckoutOptions</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.checkoutCurrentOptions">checkoutCurrentOptions</a></code> | <code>projen.github.CheckoutOptions</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.delta">delta</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.downloadArtifactOptions">downloadArtifactOptions</a></code> | <code>projen.github.DownloadArtifactOptions</code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.installSnykPrDiffOptions">installSnykPrDiffOptions</a></code> | <code><a href="#projen-projects.InstallSnykPrDiffOptions">InstallSnykPrDiffOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.runSnykSastBaselineOptions">runSnykSastBaselineOptions</a></code> | <code><a href="#projen-projects.RunSnykSastOptions">RunSnykSastOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.runSnykSastCurrentOptions">runSnykSastCurrentOptions</a></code> | <code><a href="#projen-projects.RunSnykSastOptions">RunSnykSastOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykSastWorkflowOptions.property.uploadArtifactOptions">uploadArtifactOptions</a></code> | <code>projen.github.UploadArtifactOptions</code> | *No description.* |

---

##### `installSnykOptions`<sup>Optional</sup> <a name="installSnykOptions" id="projen-projects.SnykSastWorkflowOptions.property.installSnykOptions"></a>

```typescript
public readonly installSnykOptions: InstallSnykOptions;
```

- *Type:* <a href="#projen-projects.InstallSnykOptions">InstallSnykOptions</a>

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="projen-projects.SnykSastWorkflowOptions.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `jobOptions`<sup>Optional</sup> <a name="jobOptions" id="projen-projects.SnykSastWorkflowOptions.property.jobOptions"></a>

```typescript
public readonly jobOptions: Job;
```

- *Type:* projen.github.workflows.Job

---

##### `setupNodeOptions`<sup>Optional</sup> <a name="setupNodeOptions" id="projen-projects.SnykSastWorkflowOptions.property.setupNodeOptions"></a>

```typescript
public readonly setupNodeOptions: SetupNodeOptions;
```

- *Type:* <a href="#projen-projects.SetupNodeOptions">SetupNodeOptions</a>

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="projen-projects.SnykSastWorkflowOptions.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

##### `workflowOptions`<sup>Optional</sup> <a name="workflowOptions" id="projen-projects.SnykSastWorkflowOptions.property.workflowOptions"></a>

```typescript
public readonly workflowOptions: GithubWorkflowOptions;
```

- *Type:* projen.github.GithubWorkflowOptions

---

##### `authenticateSnykOptions`<sup>Required</sup> <a name="authenticateSnykOptions" id="projen-projects.SnykSastWorkflowOptions.property.authenticateSnykOptions"></a>

```typescript
public readonly authenticateSnykOptions: AuthenticateSnykOptions;
```

- *Type:* <a href="#projen-projects.AuthenticateSnykOptions">AuthenticateSnykOptions</a>

---

##### `checkoutBaselineOptions`<sup>Optional</sup> <a name="checkoutBaselineOptions" id="projen-projects.SnykSastWorkflowOptions.property.checkoutBaselineOptions"></a>

```typescript
public readonly checkoutBaselineOptions: CheckoutOptions;
```

- *Type:* projen.github.CheckoutOptions

---

##### `checkoutCurrentOptions`<sup>Optional</sup> <a name="checkoutCurrentOptions" id="projen-projects.SnykSastWorkflowOptions.property.checkoutCurrentOptions"></a>

```typescript
public readonly checkoutCurrentOptions: CheckoutOptions;
```

- *Type:* projen.github.CheckoutOptions

---

##### `delta`<sup>Optional</sup> <a name="delta" id="projen-projects.SnykSastWorkflowOptions.property.delta"></a>

```typescript
public readonly delta: boolean;
```

- *Type:* boolean

---

##### `downloadArtifactOptions`<sup>Optional</sup> <a name="downloadArtifactOptions" id="projen-projects.SnykSastWorkflowOptions.property.downloadArtifactOptions"></a>

```typescript
public readonly downloadArtifactOptions: DownloadArtifactOptions;
```

- *Type:* projen.github.DownloadArtifactOptions

---

##### `installSnykPrDiffOptions`<sup>Optional</sup> <a name="installSnykPrDiffOptions" id="projen-projects.SnykSastWorkflowOptions.property.installSnykPrDiffOptions"></a>

```typescript
public readonly installSnykPrDiffOptions: InstallSnykPrDiffOptions;
```

- *Type:* <a href="#projen-projects.InstallSnykPrDiffOptions">InstallSnykPrDiffOptions</a>

---

##### `runSnykSastBaselineOptions`<sup>Optional</sup> <a name="runSnykSastBaselineOptions" id="projen-projects.SnykSastWorkflowOptions.property.runSnykSastBaselineOptions"></a>

```typescript
public readonly runSnykSastBaselineOptions: RunSnykSastOptions;
```

- *Type:* <a href="#projen-projects.RunSnykSastOptions">RunSnykSastOptions</a>

---

##### `runSnykSastCurrentOptions`<sup>Optional</sup> <a name="runSnykSastCurrentOptions" id="projen-projects.SnykSastWorkflowOptions.property.runSnykSastCurrentOptions"></a>

```typescript
public readonly runSnykSastCurrentOptions: RunSnykSastOptions;
```

- *Type:* <a href="#projen-projects.RunSnykSastOptions">RunSnykSastOptions</a>

---

##### `uploadArtifactOptions`<sup>Optional</sup> <a name="uploadArtifactOptions" id="projen-projects.SnykSastWorkflowOptions.property.uploadArtifactOptions"></a>

```typescript
public readonly uploadArtifactOptions: UploadArtifactOptions;
```

- *Type:* projen.github.UploadArtifactOptions

---

### SnykScaWorkflowOptions <a name="SnykScaWorkflowOptions" id="projen-projects.SnykScaWorkflowOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.SnykScaWorkflowOptions.Initializer"></a>

```typescript
import { SnykScaWorkflowOptions } from 'projen-projects'

const snykScaWorkflowOptions: SnykScaWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.SnykScaWorkflowOptions.property.installSnykOptions">installSnykOptions</a></code> | <code><a href="#projen-projects.InstallSnykOptions">InstallSnykOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykScaWorkflowOptions.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.SnykScaWorkflowOptions.property.jobOptions">jobOptions</a></code> | <code>projen.github.workflows.Job</code> | *No description.* |
| <code><a href="#projen-projects.SnykScaWorkflowOptions.property.setupNodeOptions">setupNodeOptions</a></code> | <code><a href="#projen-projects.SetupNodeOptions">SetupNodeOptions</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykScaWorkflowOptions.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-projects.SnykScaWorkflowOptions.property.workflowOptions">workflowOptions</a></code> | <code>projen.github.GithubWorkflowOptions</code> | *No description.* |
| <code><a href="#projen-projects.SnykScaWorkflowOptions.property.runSnykScaWithDeltaOptions">runSnykScaWithDeltaOptions</a></code> | <code><a href="#projen-projects.RunSnykScaWithDeltaOptions">RunSnykScaWithDeltaOptions</a></code> | *No description.* |

---

##### `installSnykOptions`<sup>Optional</sup> <a name="installSnykOptions" id="projen-projects.SnykScaWorkflowOptions.property.installSnykOptions"></a>

```typescript
public readonly installSnykOptions: InstallSnykOptions;
```

- *Type:* <a href="#projen-projects.InstallSnykOptions">InstallSnykOptions</a>

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="projen-projects.SnykScaWorkflowOptions.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `jobOptions`<sup>Optional</sup> <a name="jobOptions" id="projen-projects.SnykScaWorkflowOptions.property.jobOptions"></a>

```typescript
public readonly jobOptions: Job;
```

- *Type:* projen.github.workflows.Job

---

##### `setupNodeOptions`<sup>Optional</sup> <a name="setupNodeOptions" id="projen-projects.SnykScaWorkflowOptions.property.setupNodeOptions"></a>

```typescript
public readonly setupNodeOptions: SetupNodeOptions;
```

- *Type:* <a href="#projen-projects.SetupNodeOptions">SetupNodeOptions</a>

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="projen-projects.SnykScaWorkflowOptions.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

##### `workflowOptions`<sup>Optional</sup> <a name="workflowOptions" id="projen-projects.SnykScaWorkflowOptions.property.workflowOptions"></a>

```typescript
public readonly workflowOptions: GithubWorkflowOptions;
```

- *Type:* projen.github.GithubWorkflowOptions

---

##### `runSnykScaWithDeltaOptions`<sup>Required</sup> <a name="runSnykScaWithDeltaOptions" id="projen-projects.SnykScaWorkflowOptions.property.runSnykScaWithDeltaOptions"></a>

```typescript
public readonly runSnykScaWithDeltaOptions: RunSnykScaWithDeltaOptions;
```

- *Type:* <a href="#projen-projects.RunSnykScaWithDeltaOptions">RunSnykScaWithDeltaOptions</a>

---

### TypescriptProjectOptions <a name="TypescriptProjectOptions" id="projen-projects.TypescriptProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen-projects.TypescriptProjectOptions.Initializer"></a>

```typescript
import { TypescriptProjectOptions } from 'projen-projects'

const typescriptProjectOptions: TypescriptProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen-projects.TypescriptProjectOptions.property.snykOptions">snykOptions</a></code> | <code><a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-projects.TypescriptProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-projects.TypescriptProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-projects.TypescriptProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-projects.TypescriptProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-projects.TypescriptProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-projects.TypescriptProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-projects.TypescriptProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-projects.TypescriptProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-projects.TypescriptProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-projects.TypescriptProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-projects.TypescriptProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-projects.TypescriptProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-projects.TypescriptProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-projects.TypescriptProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-projects.TypescriptProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-projects.TypescriptProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-projects.TypescriptProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-projects.TypescriptProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-projects.TypescriptProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-projects.TypescriptProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-projects.TypescriptProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-projects.TypescriptProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-projects.TypescriptProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-projects.TypescriptProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-projects.TypescriptProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-projects.TypescriptProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="projen-projects.TypescriptProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-projects.TypescriptProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-projects.TypescriptProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen-projects.TypescriptProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen-projects.TypescriptProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen-projects.TypescriptProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen-projects.TypescriptProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen-projects.TypescriptProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen-projects.TypescriptProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen-projects.TypescriptProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen-projects.TypescriptProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen-projects.TypescriptProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen-projects.TypescriptProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen-projects.TypescriptProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-projects.TypescriptProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="projen-projects.TypescriptProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-projects.TypescriptProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-projects.TypescriptProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-projects.TypescriptProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen-projects.TypescriptProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-projects.TypescriptProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen-projects.TypescriptProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-projects.TypescriptProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-projects.TypescriptProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen-projects.TypescriptProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen-projects.TypescriptProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen-projects.TypescriptProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen-projects.TypescriptProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen-projects.TypescriptProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen-projects.TypescriptProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-projects.TypescriptProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen-projects.TypescriptProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen-projects.TypescriptProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen-projects.TypescriptProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen-projects.TypescriptProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen-projects.TypescriptProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen-projects.TypescriptProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen-projects.TypescriptProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen-projects.TypescriptProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen-projects.TypescriptProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen-projects.TypescriptProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen-projects.TypescriptProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen-projects.TypescriptProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen-projects.TypescriptProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen-projects.TypescriptProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen-projects.TypescriptProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen-projects.TypescriptProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen-projects.TypescriptProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen-projects.TypescriptProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen-projects.TypescriptProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen-projects.TypescriptProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen-projects.TypescriptProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen-projects.TypescriptProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen-projects.TypescriptProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen-projects.TypescriptProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen-projects.TypescriptProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen-projects.TypescriptProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen-projects.TypescriptProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen-projects.TypescriptProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen-projects.TypescriptProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen-projects.TypescriptProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen-projects.TypescriptProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen-projects.TypescriptProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen-projects.TypescriptProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen-projects.TypescriptProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-projects.TypescriptProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen-projects.TypescriptProjectOptions.property.buildWorkflowTriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen-projects.TypescriptProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen-projects.TypescriptProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen-projects.TypescriptProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen-projects.TypescriptProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen-projects.TypescriptProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen-projects.TypescriptProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen-projects.TypescriptProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen-projects.TypescriptProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen-projects.TypescriptProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen-projects.TypescriptProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen-projects.TypescriptProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-projects.TypescriptProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen-projects.TypescriptProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="projen-projects.TypescriptProjectOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen-projects.TypescriptProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen-projects.TypescriptProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen-projects.TypescriptProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen-projects.TypescriptProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-projects.TypescriptProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen-projects.TypescriptProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen-projects.TypescriptProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-projects.TypescriptProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-projects.TypescriptProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen-projects.TypescriptProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-projects.TypescriptProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-projects.TypescriptProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-projects.TypescriptProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen-projects.TypescriptProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen-projects.TypescriptProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen-projects.TypescriptProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen-projects.TypescriptProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen-projects.TypescriptProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen-projects.TypescriptProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen-projects.TypescriptProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen-projects.TypescriptProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-projects.TypescriptProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen-projects.TypescriptProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen-projects.TypescriptProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-projects.TypescriptProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen-projects.TypescriptProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen-projects.TypescriptProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-projects.TypescriptProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-projects.TypescriptProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen-projects.TypescriptProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen-projects.TypescriptProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen-projects.TypescriptProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-projects.TypescriptProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen-projects.TypescriptProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen-projects.TypescriptProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen-projects.TypescriptProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen-projects.TypescriptProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `snykOptions`<sup>Required</sup> <a name="snykOptions" id="projen-projects.TypescriptProjectOptions.property.snykOptions"></a>

```typescript
public readonly snykOptions: SnykComponentOptions;
```

- *Type:* <a href="#projen-projects.SnykComponentOptions">SnykComponentOptions</a>

---

## Classes <a name="Classes" id="Classes"></a>

### SnykWorkflowSteps <a name="SnykWorkflowSteps" id="projen-projects.SnykWorkflowSteps"></a>

#### Initializers <a name="Initializers" id="projen-projects.SnykWorkflowSteps.Initializer"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

new SnykWorkflowSteps()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SnykWorkflowSteps.checkout">checkout</a></code> | Checks out a repository. |
| <code><a href="#projen-projects.SnykWorkflowSteps.downloadArtifact">downloadArtifact</a></code> | Downloads an artifact. |
| <code><a href="#projen-projects.SnykWorkflowSteps.setupGitIdentity">setupGitIdentity</a></code> | Configures the git identity (user name and email). |
| <code><a href="#projen-projects.SnykWorkflowSteps.tagExists">tagExists</a></code> | Checks if a tag exists. |
| <code><a href="#projen-projects.SnykWorkflowSteps.uploadArtifact">uploadArtifact</a></code> | Uploads an artifact. |
| <code><a href="#projen-projects.SnykWorkflowSteps.authenticateSnyk">authenticateSnyk</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykWorkflowSteps.createCache">createCache</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykWorkflowSteps.getNpmRoot">getNpmRoot</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykWorkflowSteps.installSnyk">installSnyk</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykWorkflowSteps.installSnykPrDiff">installSnykPrDiff</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykWorkflowSteps.runSca">runSca</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykWorkflowSteps.runSnykPrDiff">runSnykPrDiff</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykWorkflowSteps.runSnykSast">runSnykSast</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykWorkflowSteps.runSnykScaWithDelta">runSnykScaWithDelta</a></code> | *No description.* |
| <code><a href="#projen-projects.SnykWorkflowSteps.setupNode">setupNode</a></code> | *No description.* |

---

##### `checkout` <a name="checkout" id="projen-projects.SnykWorkflowSteps.checkout"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.checkout(options?: CheckoutOptions)
```

Checks out a repository.

###### `options`<sup>Optional</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.checkout.parameter.options"></a>

- *Type:* projen.github.CheckoutOptions

Options to configure the `checkout` JobStep.

---

##### `downloadArtifact` <a name="downloadArtifact" id="projen-projects.SnykWorkflowSteps.downloadArtifact"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.downloadArtifact(options?: DownloadArtifactOptions)
```

Downloads an artifact.

###### `options`<sup>Optional</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.downloadArtifact.parameter.options"></a>

- *Type:* projen.github.DownloadArtifactOptions

Options to configure the `download-artifact` JobStep.

---

##### `setupGitIdentity` <a name="setupGitIdentity" id="projen-projects.SnykWorkflowSteps.setupGitIdentity"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.setupGitIdentity(options: SetupGitIdentityOptions)
```

Configures the git identity (user name and email).

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.setupGitIdentity.parameter.options"></a>

- *Type:* projen.github.SetupGitIdentityOptions

Options to configure the git identity JobStep.

---

##### `tagExists` <a name="tagExists" id="projen-projects.SnykWorkflowSteps.tagExists"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.tagExists(tag: string, options: JobStepConfiguration)
```

Checks if a tag exists.

Requires a checkout step to have been run before this step with "fetch-depth" set to "0".

Outputs:
- `exists`: A string value of 'true' or 'false' indicating if the tag exists.

###### `tag`<sup>Required</sup> <a name="tag" id="projen-projects.SnykWorkflowSteps.tagExists.parameter.tag"></a>

- *Type:* string

The tag to check.

You may use valid bash code instead of a literal string in this field.

---

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.tagExists.parameter.options"></a>

- *Type:* projen.github.workflows.JobStepConfiguration

Options to configure the `tag-exists` JobStep.

---

##### `uploadArtifact` <a name="uploadArtifact" id="projen-projects.SnykWorkflowSteps.uploadArtifact"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.uploadArtifact(options: UploadArtifactOptions)
```

Uploads an artifact.

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.uploadArtifact.parameter.options"></a>

- *Type:* projen.github.UploadArtifactOptions

Options to configure the `upload-artifact` JobStep.

---

##### `authenticateSnyk` <a name="authenticateSnyk" id="projen-projects.SnykWorkflowSteps.authenticateSnyk"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.authenticateSnyk(options: AuthenticateSnykOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.authenticateSnyk.parameter.options"></a>

- *Type:* <a href="#projen-projects.AuthenticateSnykOptions">AuthenticateSnykOptions</a>

---

##### `createCache` <a name="createCache" id="projen-projects.SnykWorkflowSteps.createCache"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.createCache(options: CreateCacheOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.createCache.parameter.options"></a>

- *Type:* <a href="#projen-projects.CreateCacheOptions">CreateCacheOptions</a>

---

##### `getNpmRoot` <a name="getNpmRoot" id="projen-projects.SnykWorkflowSteps.getNpmRoot"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.getNpmRoot(options?: JobStepConfiguration)
```

###### `options`<sup>Optional</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.getNpmRoot.parameter.options"></a>

- *Type:* projen.github.workflows.JobStepConfiguration

---

##### `installSnyk` <a name="installSnyk" id="projen-projects.SnykWorkflowSteps.installSnyk"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.installSnyk(options: InstallSnykOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.installSnyk.parameter.options"></a>

- *Type:* <a href="#projen-projects.InstallSnykOptions">InstallSnykOptions</a>

---

##### `installSnykPrDiff` <a name="installSnykPrDiff" id="projen-projects.SnykWorkflowSteps.installSnykPrDiff"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.installSnykPrDiff(options: InstallSnykPrDiffOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.installSnykPrDiff.parameter.options"></a>

- *Type:* <a href="#projen-projects.InstallSnykPrDiffOptions">InstallSnykPrDiffOptions</a>

---

##### `runSca` <a name="runSca" id="projen-projects.SnykWorkflowSteps.runSca"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.runSca(options?: RunScaOptions)
```

###### `options`<sup>Optional</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.runSca.parameter.options"></a>

- *Type:* <a href="#projen-projects.RunScaOptions">RunScaOptions</a>

---

##### `runSnykPrDiff` <a name="runSnykPrDiff" id="projen-projects.SnykWorkflowSteps.runSnykPrDiff"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.runSnykPrDiff(options: RunSnykPrDiffOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.runSnykPrDiff.parameter.options"></a>

- *Type:* <a href="#projen-projects.RunSnykPrDiffOptions">RunSnykPrDiffOptions</a>

---

##### `runSnykSast` <a name="runSnykSast" id="projen-projects.SnykWorkflowSteps.runSnykSast"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.runSnykSast(options: RunSnykSastOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.runSnykSast.parameter.options"></a>

- *Type:* <a href="#projen-projects.RunSnykSastOptions">RunSnykSastOptions</a>

---

##### `runSnykScaWithDelta` <a name="runSnykScaWithDelta" id="projen-projects.SnykWorkflowSteps.runSnykScaWithDelta"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.runSnykScaWithDelta(options: RunSnykScaWithDeltaOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.runSnykScaWithDelta.parameter.options"></a>

- *Type:* <a href="#projen-projects.RunSnykScaWithDeltaOptions">RunSnykScaWithDeltaOptions</a>

---

##### `setupNode` <a name="setupNode" id="projen-projects.SnykWorkflowSteps.setupNode"></a>

```typescript
import { SnykWorkflowSteps } from 'projen-projects'

SnykWorkflowSteps.setupNode(options?: SetupNodeOptions)
```

###### `options`<sup>Optional</sup> <a name="options" id="projen-projects.SnykWorkflowSteps.setupNode.parameter.options"></a>

- *Type:* <a href="#projen-projects.SetupNodeOptions">SetupNodeOptions</a>

---




## Enums <a name="Enums" id="Enums"></a>

### SeverityThreshold <a name="SeverityThreshold" id="projen-projects.SeverityThreshold"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-projects.SeverityThreshold.LOW">LOW</a></code> | *No description.* |
| <code><a href="#projen-projects.SeverityThreshold.MEDIUM">MEDIUM</a></code> | *No description.* |
| <code><a href="#projen-projects.SeverityThreshold.HIGH">HIGH</a></code> | *No description.* |
| <code><a href="#projen-projects.SeverityThreshold.CRITICAL">CRITICAL</a></code> | *No description.* |

---

##### `LOW` <a name="LOW" id="projen-projects.SeverityThreshold.LOW"></a>

---


##### `MEDIUM` <a name="MEDIUM" id="projen-projects.SeverityThreshold.MEDIUM"></a>

---


##### `HIGH` <a name="HIGH" id="projen-projects.SeverityThreshold.HIGH"></a>

---


##### `CRITICAL` <a name="CRITICAL" id="projen-projects.SeverityThreshold.CRITICAL"></a>

---

