// * Generics in ts allow you to create reusable components or functions that can work with multiple data types.
// function logAndReturn(value:number | string): number | string {
//     console.log(value);
//     return value;
// }
// const numberResult:string | number = logAndReturn(45);
// const stringResult:string | number = logAndReturn("Hello Kajal");
// console.log(numberResult);
// console.log(stringResult);
// Generic function to log and return an input value
function logAndReturn(value) {
    console.log(value);
    return value;
}
// Using the generic function in diff types
var numberResult = logAndReturn(42);
var stringResult = logAndReturn("Hello Kajal");
var booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
// Homework time
// Here is the function overloading example? 
// function add(a:number, b: number) : number;
// function add(a: string, b:string) : string;
// function add(a:any, b:any): any
// {
//     return a+b;
// }
// const result1: number = add(a:5, b:10); // o/p: 15
// const result2 : string = add(a:"Hello, ", b:"world!");
function add(a, b) {
    return a + b; // Using "as any" to suppress TypeScript error
}
var result1 = add(5, 10); // Output: 15
var result2 = add("Hello, ", "world!"); // Output: Hello, world!
console.log(result1);
console.log(result2);
