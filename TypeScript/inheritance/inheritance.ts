// *******************
// * Inheritance in TS
// ******************

// * Inheritance allows a class to reuse the functionality of an existing class without rewriting it.

// * Inheritance is a mechanism in which one class acquires the property of another class. 
// For example- A child inherits the traits of his/her parents.

class Person1 {
    name:string;
    age:number;
    hobbies:string[];
 
 //    constructor in a class
       constructor(name:string, age:number, hobbies:string[]){
          this.name = name;
          this.age = age;
          this.hobbies = hobbies;   
       }

       introduce():string{
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(',')}. `
       }
 }

 class Students extends Person1 {
   grade:number;
   constructor(name:string, age:number, hobbies:string[], grade:number){
      super(name, age, hobbies);
      this.grade = grade;
   }
   introduce():string{
      return `${super.introduce()}.I am in grade ${this.grade}`;
     }
 }
 
 // Instance of a class
 const students1:Person1 = new Person1("Kajal", 12, ["Coding", "Singing"]);
 const students2:Person1 = new Person1("Sonam", 15, ["Reading", "Painting"]);
 const students3:Person1 = new Students("Rani", 17, ["Cooking", "Dancing"], 10);
 
 console.log(students3.introduce());