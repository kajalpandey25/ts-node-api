// ******************************
// * STATIC PROPERTIES & METHODS
// *****************************

// * In TS, static methods and properties belong to the class itself rather than to instances of the class.
// By making methods and properties static, we can access them directly from the class without needing to create an instance of the class.
// This is useful for utility functions or properties that don't rely on instance-specific data.

// Example=> Math operations utility- creating a utility class to perform various mathematical oprations.

class MathOperation{
     public static PI:number = Math.PI;
     public static add(num1:number, num2:number):number{
          return num1 + num2;
     }

     public static subs(num1:number, num2:number):number{
          return num1 - num2;
     }

     public static multi(num1:number, num2:number):number{
          return num1 * num2;
     }

     public static division(num1:number, num2:number):number{
          return num1 / num2;
     }

     public static modules(num1:number, num2:number):number{
          return num1 % num2;
     }
}
console.log(MathOperation.PI);
console.log(MathOperation.add(5,10));
console.log(MathOperation.subs(10, 5));
console.log(MathOperation.multi(20, 10));
console.log(MathOperation.division(50,2));
console.log(MathOperation.modules(20,3));





