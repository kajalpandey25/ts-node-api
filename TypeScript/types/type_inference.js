// * Type inference in Ts refers to the ability of the Ts compiler to automatically determine and assign type to variables, expressions, and function return values based on their usage and context in the code.
var myName = "kajal";
var myFavNum = 1055;
// myFavNum = true
var firstName = "kajal"; // The compiler infers the type string for the variable name.
var age = 25; // The compiler infers the type number for the variable age.
var isValid = true; // The compiler infers the type boolean for the variable isValid.
// What are some best practices for using type inference in ts?
// 1. use type inference for simple cases where the assigned value clearly indicates the intended type.
// 2. whhen in doubt, provide explicit type annotation to make your intentions clear.
// 3. Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
// Here are the two question for practices:
// 1: * Declare a variable message and initialize it with the value. "Hello, TypeScript!". Infer the type of message using type inference.
var message = "Hello, TypeScript!";
console.log(message);
// 2: * Write a function calculateArea that takes the length and  width parameter of type number and return their product. Infer the return of type function using type inference.
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea);
