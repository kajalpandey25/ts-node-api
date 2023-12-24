//  Introduction To Types in typescript?
// * In TS, Type annotation is a way of explicitly specifing the type of a variable, function parameter, or function return value.
// let myFavNum:number = 10;
// let myFullName:string = "Kajal Pandey";
// ! Adavantages
// It helps the typescript compiler to 
// enforce type checking and provide type safety during developement.
// what operations could we performed on that variable or value.
// Type annotations are expressed by using a colon(:) followed by the type after the variable or function parameter declaration. There can be a space after the colon.
// let myFavNum:number = 10;
// let myFullName:string = "Kajal Pandey";
// // myFavNum = "kajal";
// console.log(myFavNum.toString());
// let sum1 = (myFavNum + 10)
// console.log(sum1);
// * Number Type
// * ---------------
// ? the number type represents numeric values, including integers and floating-point numbers.
// TODO Arithemetic-Operartions
// Number type in TS support arithmetic operations such as
// ? addition(+), subtraction(-), multiplication(*), and division(/).
// ? the result of these operation on numbers also of type number.
// let myFavNum:number = 3;
// let myAge:number = 22;
// let pi:number = 3.147;
// let myNegVal:number = -5;
// let invalidResult: number = myAge + "years";
// let invalidValue: number = "123";
// let computedValue: number = Math.sqrt(16);
// console.log(computedValue);
// let nanValue: number = NaN;
// console.log(nanValue);
// *-----------------------
// * String Type
// * ----------------------
// * Any value under single of double quotes are treated as string, also any exp. result string as output
// let myFullName = "kajal pandey"
// let myFirstName = "kajal"
// let myLastName = 'pandey'
// myFullName = myFirstName + myLastName
// console.log(myFullName);
// Here are some practice questions related to string types in typescript:
// todo string Initialization:
// ? Declare a variables message of type string and assign it the value "Hello, Typescript!".
var message = "Hello, TypeScript!";
// todo Concatenation: 
var myFullName = "kajal pandey";
var myFirstName = "kajal";
var myLastName = 'pandey';
myFullName = myFirstName + myLastName;
console.log(myFullName);
// Todo string length:
var sentence = "Please follow me!";
var sentenceLength = sentence.length;
console.log(sentenceLength);
// todo uppercase and lowercase
var text = "please follow me";
var uppercaseText = text.toUpperCase();
var lowercaseText = text.toLowerCase();
console.log(uppercaseText);
console.log(lowercaseText);
