// Math Methods and Properties

console.log(Math.PI);
// Returns Pi

console.log(Math.trunc(5.33223232));
// Math.trunc() returns value w/o decimals

console.log(Math.round(5.89));
console.log(Math.round(5.39));
// Math.round() returns rounds the number to the closest value

console.log(Math.ceil(2.1));
// Math.ceil() rounds the number up 

console.log(Math.floor(4.7));
// Math.floor() rounds the number down 

console.log(Math.pow(4, 5));
// Math.pow() returns the first value to the power of the second

console.log(Math.min(4, 5,2,5,7,1));
// Math.min() returns the lowest value, values are separated by commas

console.log(Math.max(4, 5, 1, 8));
// Math.max() returns the highest value, values are separated by commas

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
// Math.random() returns a value between 0 and 1, not including 1


console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
// Add +1 at the end, otherwise the result would a number from 1-9
// Due to random not including 1 so it is 0.0 - 9.9 (Math.random() * 10)
// Then 0-9 (Math.floor(Math.random() * 10))
// And finally 1-10 (Math.floor(Math.random() * 10) + 1)


