// * In Typescript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types.
// They are similer to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can very.
// Function to display person information
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name: ".concat(name, ", Age:").concat(age, ", Driver's License: ").concat(hasDriverLicense ? "Yes" : "No"));
};
// Example usage
var person1 = ['Kajal', 22, true];
var person2 = ['Sonam', 24, false];
displayPersonInfo(person1);
displayPersonInfo(person2);
// Example usage
var products1 = ['Laptop', 999.99, 'Electronics'];
var products2 = ['T-shirt', 19.99, 'Clothing'];
console.log("Product 1: ".concat(products1[0], ", Price: $").concat(products1[1], ", Category: ").concat(products1[2]));
console.log("Product 2: ".concat(products2[0], ", Price: $").concat(products2[1], ", Category: ").concat(products2[2]));
