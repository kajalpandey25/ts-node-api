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
// * Practice question for map:
// 1. Given an array of strings representing names, create a new array that contains the uppercase version of each name.
function convertToUpperCase(names) {
    // Using map to create a new array with uppercase names
    var upperCaseNames = names.map(function (name) { return name.toUpperCase(); });
    return upperCaseNames;
}
// Example usage:
var namesArray = ["John", "Alice", "Bob"];
var upperCaseNamesArray = convertToUpperCase(namesArray);
console.log(upperCaseNamesArray);
// 2. Given an array of numbers , create a new array that contains the square of each number.
function squareNumbers(numbers) {
    // Using map to create a new array with squared numbers
    var squaredNumbers = numbers.map(function (number) { return number * number; });
    return squaredNumbers;
}
// Example usage:
var numArray = [1, 2, 3, 4, 5];
var squaredNumbersArray = squareNumbers(numArray);
console.log(squaredNumbersArray);
// * Practice question for filter:
// 1. Given an array of strings, create new array that contains only the strings with a length greater than 4.
// function filterNamesByLength(names: string[]): string[] {
//     // Using filter to create a new array with names of length greater than 4
//     const filteredNames: string[] = names.filter(name => name.length > 4);
//     return filteredNames;
//   }
//   // Example usage:
//   const NamesArray: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
//   const filteredNamesArray: string[] = filterNamesByLength(NamesArray);
//   console.log(filteredNamesArray);
// 2. Given an array of strings, filter out the names that start with the letter "A".
function filterNamesWithoutA(names) {
    // Using filter to create a new array with names that do not start with "A"
    var filteredNames = names.filter(function (name) { return !name.startsWith("A"); });
    return filteredNames;
}
// Example usage:
var NamesArray = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
var filteredNamesArray = filterNamesWithoutA(NamesArray);
console.log(filteredNamesArray);
