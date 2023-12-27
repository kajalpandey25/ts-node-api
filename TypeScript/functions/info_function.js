//  Function Declaration
// * You can declare a function using the function keyword, followed by the function name, a list of parameters enclosed in parameter, and a return type.
// * The function body contains the code that will be executed when the function is called.
// Function Invocation:
// * To execute a function, you simply invoke it by using its name followed by parentheses.
// * You can provide arguments (actual values) for the parameters defined in the function declaration.
// Greeting Function define
// function greet(name:string, id:number){
//   console.log(`Welcome, ${name} and your id is ${id}`);
// }
// // function call 
// greet("Kajal", 1);
// Using Arrow function
// const greet = (name:string, id:number) => {
//   console.log(`Welcome, ${name} and your id is ${id}`);
// }
// // function call 
// greet("Kajal", 1);  
// Function return: How do you specify the return type of a function in TypeScript?
// * To specify the return type of a function , you can the colon(:) followed by the desired type after the functions parameter list.
var greet = function (name, id) {
    return "Welcome, ".concat(name, " and your id is ").concat(id);
};
// function call 
var myGreet = greet("Kajal", 1);
console.log(myGreet);
// Todo Practice Time
// Write a function called isPalindrome that takes a string as a parameter and return true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("12321"));
