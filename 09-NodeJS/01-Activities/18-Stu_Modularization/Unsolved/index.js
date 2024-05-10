// TODO: Import `basicmath.js

const basicmath = require('./basicmath.js');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2]

const numOne = parseFloat (process.argv[3]);
const numTwo = parseFloat (process.argv[4]);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
let result;
switch (operation) {
  case 'sum':
    result = basicmath.sum(numOne, numTwo);
    break;
  case 'difference':
    result = basicmath.difference(numOne, numTwo);
    break;
  case 'product':
    result = basicmath.product(numOne, numTwo);
    break;
  case 'quotient':
    result = basicmath.quotient(numOne, numTwo);
    break;
  default:
    console.log('Invalid operation. Please choose from: sum, difference, product, quotient.');
    process.exit(1); // Exit with error status
}

// Output the result
console.log(`Result of ${operation} is: ${result}`);