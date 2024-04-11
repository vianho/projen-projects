import * as child_process from 'child_process';
import * as path from 'path';

const MAX_BUFFER = 10 * 1024 * 1024;

/**
 * Executes `command` and returns its value or undefined if the command failed.
 */
export function execOrUndefined(
  command: string,
  options: { cwd: string },
): string | undefined {
  try {
    const value = child_process
      .execSync(command, {
        stdio: ['inherit', 'pipe', 'pipe'], // "pipe" for STDERR means it appears in exceptions
        maxBuffer: MAX_BUFFER,
        cwd: options.cwd,
      })
      .toString('utf-8')
      .trim();

    if (!value) {
      return undefined;
    } // an empty string is the same as undefined
    return value;
  } catch {
    return undefined;
  }
}

/**
 * Returns a value from git config. Searches local and then global git config.
 * @param key the config key
 */
export function getFromGitConfig(cwd: string, key: string): string | undefined {
  return (
    execOrUndefined(`git config --get --includes ${key}`, { cwd }) ??
    execOrUndefined(`git config --get --global --includes ${key}`, { cwd })
  );
}

export function resolveEmail(cwd: string): string {
  return getFromGitConfig(cwd, 'user.email') ?? 'user@domain.com';
}

export function getRepoNameFromGitConfig(cwd: string) {
  const basedir = path.basename(cwd);
  const origin = execOrUndefined('git remote get-url origin', { cwd });
  if (origin) {
    return origin.split(':')[1].split('.')[0];
  }
  const slug =
    getFromGitConfig(cwd, 'github.user') ?? resolveEmail(cwd).split('@')[0];
  return `${slug}/${basedir}`;
}
