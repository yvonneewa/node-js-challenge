// We import the `fs` module to enable interaction with the file system
const fs = require('fs');
const data = 'May the Force be with you.'

// Up to this point, we've used `fs.writeFile()` to write to an external file. However, with this operation we overwrite the existing file OR create a new `log.txt` file if one does not exist.
fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
})

// ! Uncomment the below and comment out the `fs.writeFile()` code above
// We can use the `fs.appendFile()` method to add to an existing file OR create a new `log.txt` file if one does not exist.
// fs.appendFile('log.txt', `${data}\n`, (err) =>
//   err ? console.error(err) : console.log('Commit logged!')
// );
