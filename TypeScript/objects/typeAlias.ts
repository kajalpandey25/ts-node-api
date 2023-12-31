// * In typescript, a type alias is a way to give a name to a specific type or combination of tyoes.
// It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code.
// Type aliases provide better readability, organization, and abstraction of complex types

// * To define a type alias, you use the type keyword followed by the alias name and the type definition:

type Persons ={
    name:string;
    age:number;
    isStudent:boolean;
    class?:string //Optional Property
    address:{city:string; country:string}
}

const persons:Persons = {
    name: "Kajal",
    age: 22,
    isStudent: true,
    address:{
        city:'Gurugram',
        country:'India'
    }
}

const persons1:Persons = {
    name: "Khushi",
    age: 21,
    isStudent: true,
    address:{
        city:'Uttar Pradesh',
        country:'India'
    }
}

const persons2:Persons = {
    name: "Alia",
    age: 23,
    isStudent: true,
    address:{
        city:'Delhi',
        country:'India'
    }
}

// Todo create a product Object:
// Define an interface or type representing a product with properties for name, price, and quantity. Create a product object with the following data:
// Name:"Laptop"
// Price: 1000
// Quantity: 5

type Product1 = {
    name:string;
    price:number;
    quantity:number;
}

const product1:Product1= {
    name:"Laptop",
    price:1000,
    quantity: 5
}


// Calculate total price:
// Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price * quantity ) of the product.

const calculateTotalPrice = (product1: Product1) => {
    return `${product1.name} total cost ${product1.price * product1.quantity}`
}

console.log(calculateTotalPrice(product1));


