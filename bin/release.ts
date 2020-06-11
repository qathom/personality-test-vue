#!/usr/bin/env ts-node
import util from 'util';
import inquirer from 'inquirer';

const exec = util.promisify(require('child_process').exec);

const { log } = console;

async function execute(command: string) {
  const { stdout, stderr } = await exec(command);
  return stdout || stderr;
}

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

(async () => {
  // Get current branch
  const branch = await execute('git rev-parse --abbrev-ref HEAD');

  try {
    const semVers = ['patch', 'minor', 'major'];
    const { semVer } = await inquirer.prompt({
      type: 'list',
      name: 'semVer',
      message: 'Semver:',
      choices: semVers,
    });

    // Checkout
    await execute('git checkout master');

    // Merge
    await execute('git merge dev --no-ff');

    // Update the version in package.json, create tag
    await execute(`npm version ${semVer} -m "Upgrade to %s"`);

    // Push
    await execute('git push --follow-tags');

    // Update current branch with master
    const { update } = await inquirer.prompt({
      type: 'confirm',
      name: 'update',
      message: 'Merge master?',
    });

    if (update) {
      await wait(2000);

      await execute('git merge origin/master');
    }

    log('Success!');
  } catch (e) {
    log('An error occurred', e);
  } finally {
  // Switck back to active branch
    await execute(`git checkout ${branch}`);
  }
})();
