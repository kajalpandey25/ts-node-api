// * In TS, objects are used to represent data with key-value pairs.
// Each key in the object is a string (or a symbol in ES6) that maps to a value.
// Let's consider a real-life example of representing a person's information using ts objects.
// -> name, age, isStudent, address{city, country}
var person = {
    name: "Kajal",
    age: 22,
    isStudent: true,
    address: {
        city: 'Gurugram',
        country: 'India'
    }
};
// Todo Accessing the object data
console.log(person.address.country);
console.log(person.age);
// Todo Updating object properties
person.address.country = "Nepal";
console.log(person.address.country);
// Homework
// Create a product object:
// Define a product with properties for name, price, and quantity. Create a product object with the following data:
// Name:"Laptop"
// Price: 1000
// Quantity: 5
var products = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
console.log(products.price);
