// Array in TS
//  In typescript, you can create and initialize using various approaches.
// a) Using square brackets:
var numbers = [1, 2, 3, 4, 5, 6];
// Using the array constructor:
var numbers1 = new Array(1, 2, 3, 4, 5, 6);
// Using the array.of method:
var names = Array.of("kajal", "pandey", "coder");
// Operation: Accessing elements using index:
// You can access individual elements of an array using square backets notation with the index of the element. Remember that array indices start from 0.
console.log(names[2]);
console.log(names.length);
// Todo Homework Time
// Is value1 an array? Yes or No ?
var value1 = [1, 2, 3, 4, 5]; //Yes
console.log(value1[0]);
console.log(value1.length);
// Is value2 an array? Yes or No ?
var value2 = "Hello, Kajal!"; // No
// Is value3 an array? Yes or No ?
var value3 = { name: "kajal", age: 22 }; // No
// Is value4 an array? Yes or No ?
var value4 = [true, false, true]; // Yes
console.log(value4);
// Is value5 an array? Yes or No ?
var value5 = 42; // No
