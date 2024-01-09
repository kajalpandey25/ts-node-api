// *****************************
// * GETTER & SETTER
// *****************************

// In TS classes, you can use getter and setter methods to control the access and modification of class properties.
// Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.


// Todo the get method doesn't take any parameters, and the set method takes only one parameter.

class Employees {
    private _age: number | undefined;
    constructor(
         public name:string,
         protected hobbies: string[]
     ){}

    //  setter method
     public set age(age:number){
             if(age > 150 || age < 0){
            throw new Error("age is not valid");
        }
        this._age = age;
     }


   // getter method 
     public get age(): number{
        if(this._age === undefined){
            throw new Error("age is not defined");
        }
         return this._age
 }

       introduceParent():string{
        return `Hi, I'm ${this.name} and I'm ${this._age} years old. I love ${this.hobbies.join(",")}. `
      }    
     }
 
     const employes1: Employees = new Employees("Kajal",  ["Coding", "Singing"]);

     employes1.age = 22;

     console.log(employes1.introduceParent());
     console.log(employes1.age);
     
 
  