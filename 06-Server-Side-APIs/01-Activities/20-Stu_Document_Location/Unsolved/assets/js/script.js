const badRequestUrl = 'https://api.github.com/unicorns';
const redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.


  .then(function (response) {
    // Check the response status
    if (response.status === 404) {
      // If the response status is 404, redirect to the 404 page
      document.location.href = redirectUrl;
    }
  })