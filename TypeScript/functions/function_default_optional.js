//  Optional and Default Parameters:
// TS allows you to define optional and default parameter in functions.
// Optional parameter are denoted by appending a ? symbol after the parameter name.
// and default parameter are specified by providing a default value in the parameter declaration.
// // function define
// const greet3 = (name:string, id:number):string => {
//     return `welcome, ${name} and ur id is ${id}`
// }
// // function call
// const emp = greet3("kajal", 5)
// console.log(emp);
// default parameter:
// function define
// const greet3 = (name:string, id:number = 1):string => {
//     return `welcome, ${name} and ur id is ${id}`
// }
// // function call
// const emp = greet3("kajal")
// console.log(emp);
// Optional parameter:
var greet3 = function (name, id) {
    if (id) {
        return "welcome, ".concat(name, " and ur id is ").concat(id);
    }
    else {
        return "welcome, ".concat(name);
    }
};
// function call
var emp = greet3("kajal");
var emp2 = greet3("kajal", 2);
console.log(emp);
console.log(emp2);
