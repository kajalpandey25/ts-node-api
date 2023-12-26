// * ------------------
// * Boolean Type
// * ---------------------
// ? In Typescript, the boolean type represents a value that can be either true or false. It is one of the basic primitive type in the language.
// let isMyNameVinod:boolean = true;
// let isDone:boolean = true;
// let hasStarted:boolean = false;
// hasStarted = "yes" //invalid
// Question: check even number:
// function isEven(a:number):boolean{
//     return a % 2 === 0
// }
// // func call
// console.log(isEven(6));
// Write a typescript function called isDivisibleBy4And8 that takes a number as a parameter and return true if the number is divisible by both 4 and 8.
// function isDivisibleBy4And8(number: number): boolean {
//     // Check if the number is divisible by both 4 and 8
//     return number % 4 === 0 && number % 8 === 0;
// }
// // Example usage:
// const num1 = 16;
// const num2 = 24;
// console.log(isDivisibleBy4And8(num1)); // Output: true
// console.log(isDivisibleBy4And8(num2)); // Output: true
// * ----------------------
//  * Bigint type
//  *----------------------------
// It is a built-in type that allows you to work with numbers that are larger than the range-supported by the regular number type.
// Bigint literal are written by appending the n suffix to an integer literal.
// In JS we can't read the whole numbers beyond 2 raise to power 53.
var maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);
var bigNumber = 900719925470991n;
console.log(bigNumber);
var anotherBigNumber = BigInt("9007199254709925");
console.log(anotherBigNumber);
// Assignment
var sum2 = bigNumber + anotherBigNumber;
console.log(sum2);
console.log("sum2: ", sum2);
var difference = bigNumber - anotherBigNumber;
console.log(difference);
var product = bigNumber * anotherBigNumber;
console.log(product);
var division = bigNumber / anotherBigNumber;
console.log(division);
