fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
//https://api.github.com/repos? the client going to github reps


// nodejs/node/issues to. It's the GitHub API endpoint for retrieving open issues in the Node.js repository.

// per_page=10& 10 pages per page

// &state=open only open issues

// &sort=created specifies that you want to sort the issues by creation date.

// &direction=desc'  specifies that you want the issues to be sorted in descending order of creation date.