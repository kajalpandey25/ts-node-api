// *--------------
// * Any Type
// *------------------
// The any tyoe is the most flexible type in TypeScript. It essentially turns off all type checking for the variables or expression it is applied to.
// you will see any type when u first write the code

// let myfavNum: any = 5;
// myfavNum = "kajal"
// myfavNum = true

//  userCases
// * Working with Dynamic data: When dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the any type can be useful.

// * Migration from Javascript: When migration an exisiting javascript codebase to typescript, using the any type can be convenient way to quickly annotate variables and function with out immmediately specifying their precise .





//  *------------------
// * Unknown Type
// *--------------------

// the Unknown type is a safer-alternative to any because it still enforces type checking and type safety.
// variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in spectific ways.

let num2:unknown;
num2 = 5;
num2 = "kajal";
num2 = true


if(typeof num2 === "number"){
    console.log(num2 + 5);
    
}else if(typeof num2 === "boolean"){
    console.log(num2);
    
}


// async function fetchData(): Promise<unknown> {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
    
// }

// async function processData(){
//     const response = await fetchData();

//     if (typeof response === 'object'){

//     }
// }