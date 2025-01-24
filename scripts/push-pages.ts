import ghpages from 'gh-pages';

console.info('Deploying to Github Pages...');

await ghpages.publish('dist', {
  nojekyll: true,
  branch: 'gh-pages',
  dotfiles: false,
  remove: '.vscode',
  message: 'Deployed to Github Pages',
  history: true,
  push: true,
});

console.info('Finished deploying to Github Pages');
