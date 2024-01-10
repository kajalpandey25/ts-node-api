// *****************************
// * GETTER & SETTER
// *****************************

// In TS classes, you can use getter and setter methods to control the access and modification of class properties.
// Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.


// Todo the get method doesn't take any parameters, and the set method takes only one parameter.

// class Employees {
//     private _age: number | undefined;
//     constructor(
//          public name:string,
//          protected hobbies: string[]
//      ){}

//     //  setter method
//      public set age(age:number){
//              if(age > 150 || age < 0){
//             throw new Error("age is not valid");
//         }
//         this._age = age;
//      }


//    // getter method 
//      public get age(): number{
//         if(this._age === undefined){
//             throw new Error("age is not defined");
//         }
//          return this._age
//  }

//        introduceParent():string{
//         return `Hi, I'm ${this.name} and I'm ${this._age} years old. I love ${this.hobbies.join(",")}. `
//       }    
//      }
 
//      const employes1: Employees = new Employees("Kajal",  ["Coding", "Singing"]);

//      employes1.age = 22;

//      console.log(employes1.introduceParent());
//      console.log(employes1.age);
     
 
  

// * Practice Time
// Q.1 Bank Account Balance
// Create a ts class BankAccount with a private _balance initialized to 0.
// Implement a getter method balance that return the current balance.
// Implement a setter method balance that updateds the balance if the new value is non-negative. Otherwise, log an error message.
// Instantiate an object of the BackAccount class.
// Use the setter to set the balance to 1000 and use the getter to display the update balance.
// Try setting a negative balance using the setter. What output do you expect?

class BackAccount{
    private _balance:number = 0;

    public get balance():number{
        return this._balance;
    }

    public set balance(newBalance:number){
        if(newBalance < 0){
            throw new Error("Invalid balance");
        }
        (this._balance = newBalance);
    }
}

const account = new BackAccount();
account.balance = 10;
console.log(account.balance);


// Q.2: Temperature Convertor
// Define a ts class Temperature with a private property _celsius set to 0.
// implement a getter method celsius that return the temprature in celsius.
// implement a setter method celsius that sets the temprature in celsius.
// implemnt a getter method fahrenhrit that converts celsius to fehrenhrit using the formula(C + 9/5) + 32.
// implement a setter method fahrenhrit that converts fahrenhrit to celsius using the formula (F - 32) * 5/9.
// create an instance of the tempreture class.
// use the setter to set the temprature in celsius to 25 and then use the getter for fahrenheit. What Fahrehrit value do you expect?
// Use the setter to set the temprature in fahrenheit to 98.6 and then use the getter for celsius. What celsius value do you expect?

class Temperature{
    private _celsius:number = 0;

    public get celsius():number{
    return this._celsius
    }

    public set celsius(newCelsius:number){
        this._celsius = newCelsius;
    }

    public get fahrenheit():number{
        return (this._celsius * 9) / 5 + 32;
    }

    public set fahrenheit(newFah:number){
       this._celsius = (newFah - 32) * 5/9;
    }
}

const temp = new Temperature();
temp.celsius = 25;

console.log(temp.fahrenheit);

temp.fahrenheit = 77
console.log(temp.celsius);

