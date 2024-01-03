// * In Typescript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types.
// They are similer to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can very.


// Let's consider a scenario where you want to represent a person's basic information, including their name, age , and whether they have a driver's license. using a tuple can be an appropriate choice becoz three elements have a specific order and type.


// Defining to display type for person information
type PersonInfo = readonly [string, number, boolean]

// Function to display person information

const displayPersonInfo: (person: PersonInfo) => void = 
(person: PersonInfo) : void => {
const [name, age, hasDriverLicense] = person;
console.log(`Name: ${name}, Age:${age}, Driver's License: ${hasDriverLicense ? "Yes" : "No"}`);
}

// Example usage
const person1:PersonInfo = ['Kajal', 22, true];
const person2:PersonInfo = ['Sonam', 24, false];

displayPersonInfo(person1)
displayPersonInfo(person2)


// Question 1:
// You are building a simple e-commerce application and need to store product information.
// Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Define a tuple type for product information
type ProductInfo = [string, number, string];

// Example usage
const products1: ProductInfo = ['Laptop', 999.99, 'Electronics'];
const products2: ProductInfo = ['T-shirt', 19.99, 'Clothing'];

console.log(`Product 1: ${products1[0]}, Price: $${products1[1]}, Category: ${products1[2]}`);
console.log(`Product 2: ${products2[0]}, Price: $${products2[1]}, Category: ${products2[2]}`);
