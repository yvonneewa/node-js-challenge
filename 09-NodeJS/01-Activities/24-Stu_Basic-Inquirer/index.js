const colors = require(`colors`);
const inquirer = require(`inquirer`);


inquirer
  .prompt([
    {
      type: 'list',
      name: 'color',
      message: 'What color do you want',
      choices: [
        'red',
        'blue',
        'yellow',
        'purple',
       
      ],
    },
    
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });