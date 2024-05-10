// TODO: What are we importing? - a module a file system - connecting a scrpit
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()- its appending a log text file in the file and logging what is typed into it will be on a new line each time 
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works - checks to see if there is an error if there is print the error message if not prints the commit logged 
  err ? console.error(err) : console.log('Commit logged!')
);
