const repoNameEl = document.querySelector('#repo-name');
const issueContainerEl = document.querySelector('#issues-container');
const limitWarningEl = document.querySelector('#limit-warning');

const getRepoName = function () {
  // Where is this value coming from?
  // TODO: Write your answer here your repo page
  const queryString = document.location.search;
  const repoName = queryString.split('=')[1];

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    // Under what condition will this run?
    // TODO: Write your answer here Updates the content of an element with ID repoNameEl to display the repo name.Redirects the user to ./index.html, likely the main page where users can select a repository.
Calls a function named getRepoIssues(repoName), likely to fetch issues for that repository.
    document.location.replace('./index.html');
  }
};

const getRepoIssues = function (repo) {
  const apiUrl = `https://api.github.com/repos/${repo}/issues?direction=asc`;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);

        // What is this checking for? Under what condition will this be `true`?
        // TODO: Write your answer hereIt's checking if the Link header is present in the response from the GitHub API.It will be true when more issues exist on the server than were included in the current response, indicating that pagination is necessary to fetch all issues.
        if (response.headers.get('Link')) {
          displayWarning(repo);
        }
      });
    } else {
      document.location.replace('./index.html');
    }
  });
};

const displayIssues = function (issues) {
  // Is there a difference between this and `!issues.length`?
  // TODO: Write your answer here issues itself doesn't directly indicate whether there are issues or not. It holds the actual issue data.
// !issues.length is a boolean expression that evaluates to true if there are no issues (issues.length is 0) and false if there are one or more issues. 
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (let issueObj of issues) {
    const issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issueObj.html_url);
    issueEl.setAttribute('target', '_blank');

    const titleEl = document.createElement('span');
    titleEl.textContent = issueObj.title;
    issueEl.appendChild(titleEl);

    const typeEl = document.createElement('span');

    if (issueObj.pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

// What does this function do?
// TODO: Write your answer hereThis function, displayWarning, creates a warning message informing the user that only a limited number of issues are displayed and provides a link to the full list on GitHub.
const displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  const linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', `https://github.com/${repo}/issues`);
  linkEl.setAttribute('target', '_blank');

  // Where does this appear on the page?
  // TODO: Write your answer here Therefore, the warning message will appear as content within the element identified by limitWarningEl on your web page.

// Assuming limitWarningEl represents an element like a <div> or a <p> with an ID set to "limitWarningEl", the warning message and link would be displayed wherever this element is placed in your HTML structure.
  limitWarningEl.appendChild(linkEl);
};

getRepoName();
