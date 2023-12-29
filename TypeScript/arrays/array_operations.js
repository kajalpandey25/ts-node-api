//  * Arrays in TS come with built-in methods that allow you to perform common operation.
var fruits = ["apple", "banana", "orange", "mango"];
// a) Adding elements to an array using push:
var newUpdatedFruits = fruits.push("Kiwi");
console.log(newUpdatedFruits);
console.log(fruits);
// b) Removing elements from an array using pop:
var lastData = fruits.pop();
console.log(lastData);
console.log(fruits);
// Iteration over elements:
//  You can iterate over the elements of an array using various looping constructs such as for, for ...of, or array methods like forEach.
// Using for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(i);
    console.log(fruits[i]);
}
// Using for ...of loop
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// Using forEach method
fruits.forEach(function (curVal) { return console.log(curVal); });
