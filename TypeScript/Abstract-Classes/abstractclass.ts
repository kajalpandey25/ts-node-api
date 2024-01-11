//  * Abstract classes provide a way to define common properties and methods that multiple derived classes can share.
// This promotes code reuse and helps establish a common interface for related classes.
// Abstract class cannot be instantiated

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

class Shape {
    private _width: number;
    private _height: number;
  
    constructor(width: number, height: number) {
      this._width = width;
      this._height = height;
    }
  
    get width(): number {
      return this._width;
    }
  
    set width(value: number) {
      this._width = value;
    }
  
    get height(): number {
      return this._height;
    }
  
    set height(value: number) {
      this._height = value;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width: number, height: number) {
      super(width, height);
    }
  
    get area(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Shape {
    constructor(sideLength: number) {
      super(sideLength, sideLength);
    }
  
    get area(): number {
      return this.width * this.height;
    }
  }
  
  // Example usage:
  
  const rectangle = new Rectangle(5, 10);
  console.log('Rectangle Area:', rectangle.area); // Output: Rectangle Area: 50
  
  const square = new Square(5);
  console.log('Square Area:', square.area); // Output: Square Area: 25
  
  // Using getter and setter methods
  rectangle.width = 8;
  rectangle.height = 12;
  console.log('Updated Rectangle Area:', rectangle.area); // Output: Updated Rectangle Area: 96
  
  square.width = 6;
  square.height = 6;
  console.log('Updated Square Area:', square.area); // Output: Updated Square Area: 36
  