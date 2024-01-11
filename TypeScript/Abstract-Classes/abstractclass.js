//  * Abstract classes provide a way to define common properties and methods that multiple derived classes can share.
// This promotes code reuse and helps establish a common interface for related classes.
// Abstract class cannot be instantiated
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
// Abstract classes focus on class inheritance and sharing common functionality.
// Whereas the useContext hook in react focuses on managing global state and allowing components to consume that state.
// abstract class PerObj{
//     name:string;
//     age:number;
// }
// class Person:PerObj = {
//     name: "Kajal",
//     age: 22,
// };
// class Person1:PerObj = {
//     name: "Rani",
//     age: 25,
// };
// class Person2:PerObj = {
//     name: "Sonali",
//     age: 24,
// };
// Example=> Shape Hierarchy
//  Suppose you are building a graphics application, and you want to create a hierarchy of diff shapes.
// you can use an abstract base class shape to define common properties and methods that all shapes share.
// circle, rectangle
//  abstract class Shape {
//     constructor(protected color:string){}
//       abstract calculateArea():number;
//       abstract displayArea:() => void;
// }
// class Circle extends Shape{
//     constructor(protected color:string, protected radius:number){
//         super (color);
//     }
//      public calculateArea():number{
//         return Math.PI * this.radius * this.radius
//     };
//     displayArea=  () => {
//        console.log(`This is a ${this.color} circle with radius ${this.radius}`);
//     };
// }
// const circle = new Circle("red", 5)
// console.log(circle.calculateArea());
// circle.displayArea();
// Practice Time
// You need to do the same for square and Rectangle and if possible use getter and setter methods or static members.
var Shape = /** @class */ (function () {
    function Shape(width, height) {
        this._width = width;
        this._height = height;
    }
    Object.defineProperty(Shape.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        return _super.call(this, width, height) || this;
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this.width * this.height;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sideLength) {
        return _super.call(this, sideLength, sideLength) || this;
    }
    Object.defineProperty(Square.prototype, "area", {
        get: function () {
            return this.width * this.height;
        },
        enumerable: false,
        configurable: true
    });
    return Square;
}(Shape));
// Example usage:
var rectangle = new Rectangle(5, 10);
console.log('Rectangle Area:', rectangle.area); // Output: Rectangle Area: 50
var square = new Square(5);
console.log('Square Area:', square.area); // Output: Square Area: 25
// Using getter and setter methods
rectangle.width = 8;
rectangle.height = 12;
console.log('Updated Rectangle Area:', rectangle.area); // Output: Updated Rectangle Area: 96
square.width = 6;
square.height = 6;
console.log('Updated Square Area:', square.area); // Output: Updated Square Area: 36
