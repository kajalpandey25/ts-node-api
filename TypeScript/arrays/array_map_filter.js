// * Map & Filter Method in Array in TS
var myNum = [1, 2, 3, 4, 5];
// Map Method->
// The map method creates a new array by applying a provided function to each element of the original array. It transforms each element and returns a new array with the transformed values.
// 1. Doubling each number
var doubleData = myNum.map(function (curVal) { return curVal * 2; });
console.log(doubleData);
// 2. Converting numbers to strings
var numberToString = myNum.map(function (curElm) { return curElm.toString(); });
console.log(numberToString);
// Filter Method
// 1. Filtering even numbers
var evenNumbers = myNum.filter(function (curElm) { return curElm % 2 === 0; });
console.log(evenNumbers);
// 2. Filtering Odd Numbers
var oddNumbers = myNum.filter(function (curElm) { return curElm % 2 !== 0; });
console.log(oddNumbers);
// 3. Filtering numbers greater than 3
var numberGreaterThenThree = myNum.filter(function (curElm) { return curElm > 3; });
console.log(numberGreaterThenThree);
// Todo Homework Time
