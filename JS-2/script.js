// Strings
const myVariable = "Mathematics";

//Length Property
console.log(myVariable.length);

//String methods

//chartAt
console.log(myVariable.charAt(0));
console.log(myVariable.charAt(5));
//Returns the character at the position provided

//indexOf
console.log(myVariable.indexOf("a"));
//Returns the position of the first occurance 
//of the information provided

//lastiIndexOf
console.log(myVariable.lastIndexOf("a"));
//Returns the position of the last occurance
//of the information provided

//slice
console.log(myVariable.slice(3));
//Accepts start and ending parameters
//Returns the chart from start to end position provided(end not included)
//If end parameter not added, returns all the chart from the start

//toUpperCase/toLowerCase
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
//Does not need parameters
//Needs parenthesis to be executed

//includes
console.log(myVariable.includes("mat"));
//Returns boolean
//Checks if chart provided are within the string

//includes
console.log(myVariable.split("e"));
//Returns an array, it does not include the value provided
console.log(myVariable.split(""));
//If no parameter, the array shows every chart separated
console.log("Hello, there, hi".split(","));
//If "," provided, it will return each word in the array (when separated by commas)


