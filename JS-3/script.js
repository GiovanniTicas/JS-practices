// NUMBERS

// An integer is a whole number.
const myNumber = 42;

// A float is a decimal number.
const myFloat = 42.01;

const myString = "42";


//Number Methods

console.log(Number.isInteger(myFloat));
// Determines if the value passedis an integer

console.log(Number.parseFloat(50));
// Parses an argument and returns a floating poitn number
// If a number can't be parsed from the argument, it returns NaN
// it remvoves non-numerical values

console.log(myFloat.toFixed(1));
// Formats a number according to how many decimal points are provided 
// as the parameter
// It returns STRING data not NUMBER data

console.log(parseInt(myFloat));
// Parses a string and returns an integer
// it remvoves non-numerical values

console.log(typeof myNumber.toString());
// Returns a string representing the number/value provided
