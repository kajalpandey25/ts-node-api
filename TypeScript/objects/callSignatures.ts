// * The function call signature refers to the declaration or definition of a function, which includes the function's name, parameter, and return type.
// It defines the structure and type information of a function without including the function's implementation or body.

// * Lets add one function inside the object. it's more like creating a method in object.

// Very Important => Call Signatures are typically used inside object type notations to describe the shape of functions within object types.


type Student ={
    name:string;
    age:number;
    gender?:string;
}

const student1:Student = {
    name:"Kajal",
    age:29
}
