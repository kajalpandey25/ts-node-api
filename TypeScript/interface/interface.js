// * In TS , an interface is a powerful feature that allows you to define a contract for an object's shape.
// It specifies the properties and their types that an object must have to be considered of that particular interface type.
// Interfaces are primarily used for type-checking during development and do not generate any javascript code at runtime.
var greets = {
    name: 'kajal',
    age: 22,
};
var product0 = {
    name: 'Laptop',
    price: 1000,
    quantity: 5
};
// Calculate total price:
// Give the product object from the previous question, write a function called calculateTotalPrice that calculates and return the total price(price * quantity )of the product.
var calculateTotalPrices = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
//  call
console.log(calculateTotalPrices(product0));
