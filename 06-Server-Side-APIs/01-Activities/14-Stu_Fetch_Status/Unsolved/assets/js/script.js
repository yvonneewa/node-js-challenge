const badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';
const responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
    if (response.status !==200){
      else if (response.status >404)
    }
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
