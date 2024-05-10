const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

function writeToFile(answers) {
    fs.writeFileSync('responses.txt', JSON.stringify(answers, null, 4), 'utf8');
    console.log('Responses have been saved to responses.txt');
}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'languages',
      choices: ['Ibgo', 'Spanish', 'French'], // Fixed typo in 'choices'
    },
    {
      type: 'list', // Corrected type
      message: 'What is your preferred method of communication?',
      name: 'communication',
      choices: ['Email', 'Phone', 'Text', 'In-person'],
    },
  ])
  .then((response) => {
    console.log(colors.brightMagenta('Name: '), response.name);
    console.log(colors.brightMagenta('Languages: '), response.languages.join(', '));
    console.log(colors.brightMagenta('Preferred method of communication: '), response.communication);
    writeToFile(response); // Call writeToFile function here
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
