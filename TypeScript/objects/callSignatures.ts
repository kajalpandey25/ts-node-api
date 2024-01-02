// * The function call signature refers to the declaration or definition of a function, which includes the function's name, parameter, and return type.
// It defines the structure and type information of a function without including the function's implementation or body.

// * Lets add one function inside the object. it's more like creating a method in object.

// Very Important => Call Signatures are typically used inside object type notations to describe the shape of functions within object types.


type Student ={
    name:string;
    age:number;
    gender?:string;
    greet: (country:string) => string  // CallSignature method
    // (country:string): string // Pure call signature
} 

const student1:Student = {
    name:"Kajal",
    age:22,
    greet: (country): string => `Welcome My name is ${student1.name}, I am ${student1.age}yrs old & I am from ${country}`
}

const student2:Student = {
    name:"Sonam",
    age:24,
    greet: (country): string => `Welcome My name is ${student2.name}, I am ${student2.age}yrs old & I am from ${country}`
}


const introduction:(student1:Student ) => string = (student1:Student ): string =>{
    const {name, age} = student1;
    return `Welcome My name is ${name}, I am ${age}yrs old`;

}
// console.log(introduction(student1));
// console.log(introduction(student2));
console.log(student1.greet('India'));
console.log(student2.greet('Nepal'));









