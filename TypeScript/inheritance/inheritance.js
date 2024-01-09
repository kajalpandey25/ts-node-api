// *******************
// * Inheritance in TS
// ******************
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// * Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
// * Inheritance is a mechanism in which one class acquires the property of another class. 
// For example- A child inherits the traits of his/her parents.
var Person1 = /** @class */ (function () {
    //    constructor in a class
    function Person1(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Person1.prototype.introduce = function () {
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old. I love ").concat(this.hobbies.join(','), ". ");
    };
    return Person1;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Students.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), ".I am in grade ").concat(this.grade);
    };
    return Students;
}(Person1));
// Instance of a class
var students1 = new Person1("Kajal", 12, ["Coding", "Singing"]);
var students2 = new Person1("Sonam", 15, ["Reading", "Painting"]);
var students3 = new Students("Rani", 17, ["Cooking", "Dancing"], 10);
console.log(students3.introduce());
