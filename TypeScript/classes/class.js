// **********************
// * How to create a class and also instance of class in Ts
// **********************
// * A class in terms of oop is a blueprint for creating objects
// * A class is like a blueprint for creating similar things.
// In TS, there is a convention to use PascalCase (also known as UpperCamelCase) for class names.
// This means that class names should start with a capital letter and each subsequent word in the class name should also  begin with a capital letter.
var Person1 = /** @class */ (function () {
    //    constructor in a class
    function Person1(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Person1;
}());
// Instance of a class
var students1 = new Person1("Kajal", 12, ["Coding", "Singing"]);
var students2 = new Person1("Sonam", 15, ["Reading", "Painting"]);
var students3 = new Person1("Rani", 17, ["Cooking", "Dancing"]);
console.log(students1);
console.log(students2);
console.log(students3);
