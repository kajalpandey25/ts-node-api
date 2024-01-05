//  Union types allow to specific that a variable can hold values of multiple types.
// You use the |(pipe) symbol to define a union type.
// * In TS, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties.
// Failure to do so will result in a type error during compilaton.

const inputValue: (value: string | number | boolean) => void = (value: string | number | boolean): void => {
    // Function implementation goes here
  }
  
  inputValue(55);
  inputValue("Hello World");
  inputValue(true);
  

// * Practice, we'll create a function that can accept different types of arguments and perform diff actions based on the of the input.
// Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we can use a union type to allow the function to accept both numbers and strings.


// define
const userInput: (value: string | number) => string | number = (value: string | number):string | number => {
 if (typeof value === 'number'){
    return value * 2
 }else if(typeof value === "string"){
    return value.toUpperCase();
 }else{
    throw new Error('Invalid input data')
 }
}

// function call

console.log(userInput(10));
console.log(userInput("subscribe"));


// Todo Homework Time
// We want to create a function that formats the value passed to it in a specific way based on its type:
//1. If the input is a number, it should add a dollar sign and format it with two decimal places.

// function formatValue(input: number | string): string {
//    if (typeof input === 'number') {
//        // If the input is a number, add a dollar sign and format with two decimal places
//        return `$${input.toFixed(2)}`;
//    } else if (typeof input === 'string') {
//        // If the input is a string, return it as is
//        return input;
//    } else {
//        // Handle other types if needed
//        return 'Invalid input type';
//    }
// }

// // Examples
// const formattedNumber = formatValue(123.456);
// console.log(formattedNumber); // Output: $123.46

// const stringValue = formatValue('Hello');
// console.log(stringValue); // Output: Hello

// 2. If the input is a boolean, it should return "Yes" for true and "No" for false.

// function formatValue(value: any): string {
//    if (typeof value === 'boolean') {
//        return value ? 'Yes' : 'No';
//    } else {
//        // Handle other types if needed
//        return String(value);
//    }
// }

// // Example usage:
// const booleanValue: boolean = true;
// const formattedResult: string = formatValue(booleanValue);
// console.log(formattedResult); // Output: "Yes"


//3. If the input is a string, it should capitalize the first letter.
function formatValue(input: string | number): string | number {
   if (typeof input === 'string') {
     // If the input is a string, capitalize the first letter
     return input.charAt(0).toUpperCase() + input.slice(1);
   } else {
     // For other types (e.g., number), return the input as is
     return input;
   }
 }
 
 // Example usage:
 const stringValue: string = "example";
 const formattedString: string | number = formatValue(stringValue);
 console.log(formattedString); // Output: "Example"
 
 const numberValue: number = 42;
 const formattedNumber:string | number = formatValue(numberValue);
 console.log(formattedNumber); // Output: 42
 


//  Intersection types allow you to combine multiple types into a single type. Ypu use the &(ampresand) symbol to define an intersection type.

type Person = {
  name:string;
  age:number
}
type Employee = {
  emp_id: number;
  department: string
}

type EmployeeDetails = Person & Employee

const employee:EmployeeDetails ={
  name:'Kajal',
  age:22,
  emp_id: 111,
  department: "IT"
}

// Practice: Create User Profile
// You are given two TS types: User and MyLocation. The User type represents basic user information, while the MYLocation type contains details about the user's location.
// Create a function called createUserProfile that takes a User object and a MYlocation object as arguments and prints the user's name and the city they are from.

type User = {
  name: string;
  age:number
}

type MyLocation= {
  country:string;
  city:string
}


const user:User = {name:"Kajal Pandey", age:22}
const myLocation:MyLocation = {country:'India', city:'Gurugram'}

// define
const createUserProfile : (user:User, location:MyLocation) => string =(user:User, location:MyLocation) : string =>{
  return `My name is ${user.name} and I am living in city: ${location.city}`
 

}

// call
console.log(createUserProfile(user, myLocation));




