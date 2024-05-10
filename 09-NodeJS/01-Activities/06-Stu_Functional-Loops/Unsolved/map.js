const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
// The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
const doubledArray = originalArray.map(data => data * 2);

console.log(doubledArray);
console.log(originalArray);

// it takes your original array and multiply by 2

// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
const tripledArray = originalArray.map(data => data * 3);

// takes your original and multiplies it by 3

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});
//checks to see if its divsiable by 2 and says if its even or od