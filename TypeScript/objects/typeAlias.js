// * In typescript, a type alias is a way to give a name to a specific type or combination of tyoes.
// It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code.
// Type aliases provide better readability, organization, and abstraction of complex types
var persons = {
    name: "Kajal",
    age: 22,
    isStudent: true,
    address: {
        city: 'Gurugram',
        country: 'India'
    }
};
var persons1 = {
    name: "Khushi",
    age: 21,
    isStudent: true,
    address: {
        city: 'Uttar Pradesh',
        country: 'India'
    }
};
var persons2 = {
    name: "Alia",
    age: 23,
    isStudent: true,
    address: {
        city: 'Delhi',
        country: 'India'
    }
};
var product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
// Calculate total price:
// Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price * quantity ) of the product.
var calculateTotalPrice = function (product1) {
    return "".concat(product1.name, " total cost ").concat(product1.price * product1.quantity);
};
console.log(calculateTotalPrice(product1));
