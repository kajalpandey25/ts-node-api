//         | Parent Class  | Child Class | Outside Class |
//         |---------------|-------------|---------------|
//   Public |   Yes         |  Yes        |   Yes         |
// Protected |  Yes         |   Yes       |  No           |
//  Private |    Yes        | No          |  No           |
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
// class Person1 {
//     public name:string;
//    age:number;
//    private hobbies:string[];
//  //    constructor in a class
//        constructor(name:string, age:number, hobbies:string[]){
//           this.name = name;
//           this.age = age;
//           this.hobbies = hobbies;   
//        }
//        introduceParent():string{
//         return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(',')}. `
//        }
//  }
//  class Students extends Person1 {
//    grade:number;
//    constructor(name:string, age:number, hobbies:string[], grade:number){
//       super(name, age, hobbies);
//       this.grade = grade;
//    }
// //    introduce():string{
// //       return `${super.introduce()}.I am in grade ${this.grade}`;
// //     // return this.hobbies;
// //      }
// //  }
//  // Instance of a class
//  const students1:Person1 = new Person1("Kajal", 12, ["Coding", "Singing"]);
//  const students2:Person1 = new Person1("Sonam", 15, ["Reading", "Painting"]);
// console.log(students1.introduceParent());
//  const students3:Students = new Students(
//     "Rani",
//      17,
//     ["Cooking", "Dancing"],
//      10
//      );
//      console.log(students3.introduce());
// ShortHand Properties in classes
var Employees = /** @class */ (function () {
    function Employees(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Employees.prototype.introduceParent = function () {
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old. I love ").concat(this.hobbies.join(","), ". ");
    };
    return Employees;
}());
var Subemp = /** @class */ (function (_super) {
    __extends(Subemp, _super);
    function Subemp(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Subemp.prototype.intoduce = function () {
        return this.hobbies;
    };
    return Subemp;
}(Employees));
var employes1 = new Employees("Kajal", 12, ["Coding", "Singing"]);
console.log(employes1.introduceParent());
var employes2 = new Subemp("Khushi", 19, ["Reading", "Singing"], 10);
console.log(employes2.intoduce());
