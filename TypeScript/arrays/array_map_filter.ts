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

function convertToUpperCase(names: string[]): string[] {
    // Using map to create a new array with uppercase names
    const upperCaseNames: string[] = names.map(name => name.toUpperCase());
    return upperCaseNames;
  }
  
  // Example usage:
  const namesArray: string[] = ["John", "Alice", "Bob"];
  const upperCaseNamesArray: string[] = convertToUpperCase(namesArray);
  
  console.log(upperCaseNamesArray);
  
// 2. Given an array of numbers , create a new array that contains the square of each number.


function squareNumbers(numbers: number[]): number[] {
    // Using map to create a new array with squared numbers
    const squaredNumbers: number[] = numbers.map(number => number * number);
    return squaredNumbers;
  }
  
  // Example usage:
  const numArray: number[] = [1, 2, 3, 4, 5];
  const squaredNumbersArray: number[] = squareNumbers(numArray);
  
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
 
function filterNamesWithoutA(names: string[]): string[] {
    // Using filter to create a new array with names that do not start with "A"
    const filteredNames: string[] = names.filter(name => !name.startsWith("A"));
    return filteredNames;
  }
  
  // Example usage:
  const NamesArray: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
  const filteredNamesArray: string[] = filterNamesWithoutA(NamesArray);
  
  console.log(filteredNamesArray);
  