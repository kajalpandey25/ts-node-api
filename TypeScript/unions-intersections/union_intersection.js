//  Union types allow to specific that a variable can hold values of multiple types.
// You use the |(pipe) symbol to define a union type.
// * In TS, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties.
// Failure to do so will result in a type error during compilaton.
var inputValue = function (value) {
    // Function implementation goes here
};
inputValue(55);
inputValue("Hello World");
inputValue(true);
// * Practice, we'll create a function that can accept different types of arguments and perform diff actions based on the of the input.
// Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we can use a union type to allow the function to accept both numbers and strings.
// define
var userInput = function (value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid input data');
    }
};
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
function formatValue(input) {
    if (typeof input === 'string') {
        // If the input is a string, capitalize the first letter
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
    else {
        // For other types (e.g., number), return the input as is
        return input;
    }
}
// Example usage:
var stringValue = "example";
var formattedString = formatValue(stringValue);
console.log(formattedString); // Output: "Example"
var numberValue = 42;
var formattedNumber = formatValue(numberValue);
console.log(formattedNumber); // Output: 42
