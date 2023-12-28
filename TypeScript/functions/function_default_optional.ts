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

const greet3 = (name:string, id?:number):string => {
    if(id){
    return `welcome, ${name} and ur id is ${id}`

}else{
    return `welcome, ${name}`
}

}


// function call
const emp = greet3("kajal")
const emp2 = greet3("kajal", 2)
console.log(emp);
console.log(emp2);




