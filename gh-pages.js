var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/aleciberg/alec.iberg', // Update to point to your repository
    user: {
      name: 'Alec Iberg', // update to use your name
      email: 'ibergalec@icloud.com', // Update to use your email
    },
  },
  () => {
    console.log('Deploy Complete!');
  }
);
