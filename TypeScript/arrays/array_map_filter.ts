// * Map & Filter Method in Array in TS

const myNum: number[] = [1,2,3,4,5];

// Map Method->
// The map method creates a new array by applying a provided function to each element of the original array. It transforms each element and returns a new array with the transformed values.

// 1. Doubling each number

const doubleData:number[] = myNum.map((curVal:number) => curVal * 2)
console.log(doubleData);

// 2. Converting numbers to strings

const numberToString:string[] = myNum.map((curElm:number) => curElm.toString())
console.log(numberToString);


// Filter Method
// 1. Filtering even numbers

const evenNumbers:number[] = myNum.filter((curElm:number) => curElm % 2 === 0)
console.log(evenNumbers);

// 2. Filtering Odd Numbers

const oddNumbers:number[] = myNum.filter((curElm:number) => curElm % 2 !== 0)
console.log(oddNumbers);

// 3. Filtering numbers greater than 3

const numberGreaterThenThree = myNum.filter((curElm:number) => curElm > 3)
console.log(numberGreaterThenThree);


// Todo Homework Time
// * Practice question for map:
// 1. Given an array of strings representing names, create a new array that contains the uppercase version of each name.
// 2. Given an array of numbers , create a new array that contains the square of each number.

// * Practice question for filter:
// 1. Given an array of strings, create new array that contains only the strings with a length greater than 4.
// * const names:string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];

// 2. Given an array of strings, filter out the names that start with the letter "A".
 
