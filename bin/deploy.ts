import execa from 'execa';

// Parameters
const folderName = 'dist';

(async () => {
  try {
    // WIP
    await execa('git', ['checkout', '--orphan', 'gh-pages']);

    console.log('Building...');

    await execa('npm', ['run', 'build']);

    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);

    console.log('Pushing to gh-pages...');

    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
    await execa('rm', ['-r', folderName]);
    await execa('git', ['checkout', '-b', 'master', '--track', 'origin/master']);
    await execa('git', ['branch', '-D', 'gh-pages']);

    console.log('Successfully deployed');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();