const inquirer = require("inquirer");
const colors = require("colors");

inquirer
  .prompt([
    {
      type: "list",
      message: "What is your favorite color?",
      name: "color",
      choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
    }
  ])
  .then((response) =>
    console.log(colors[response.color](`Your favorite color is ${response.color}!`))
  );
