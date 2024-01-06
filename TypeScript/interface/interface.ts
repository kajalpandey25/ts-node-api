// * In TS , an interface is a powerful feature that allows you to define a contract for an object's shape.
// It specifies the properties and their types that an object must have to be considered of that particular interface type.
// Interfaces are primarily used for type-checking during development and do not generate any javascript code at runtime.

interface Greet {
    name:string;
    age:number
}
const greets:Greet = {
    name:'kajal',
    age:22,
}

// todo create a product object:
// Define an interface or type representing a product with properties for name, price, and quantity. Create a product object with the following data:

interface Products {
    name:string;
    price:number;
    quantity:number;
}
const product0:Products = {
    name:'Laptop',
    price: 1000,
    quantity:5
}

// Calculate total price:
// Give the product object from the previous question, write a function called calculateTotalPrice that calculates and return the total price(price * quantity )of the product.

 const calculateTotalPrices: (product:Products) => number = (product:Products):number => {
const {price, quantity} = product;
return price*quantity

 }

//  call
console.log(calculateTotalPrices(product0));

