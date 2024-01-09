//         | Parent Class  | Child Class | Outside Class |
//         |---------------|-------------|---------------|
//   Public |   Yes         |  Yes        |   Yes         |
// Protected |  Yes         |   Yes       |  No           |
//  Private |    Yes        | No          |  No           |


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

// class Employees {
//    constructor(
//         public name:string,
//         public age:number,
//         protected hobbies: string[]
//     ){}

//       introduceParent():string{
//        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}. `
//      }    
//     }

//     class Subemp extends Employees {
//         constructor(
//             name:string,
//             age:number,
//             hobbies:string[],
//             public grade:number
//         ){
//           super(name, age, hobbies);  
//         }

//         intoduce(): string[]{
//             return this.hobbies;
//         }
//     }

//     const employes1: Employees = new Employees("Kajal", 12, ["Coding", "Singing"]);

//     console.log(employes1.introduceParent());

//     const employes2:Subemp = new Subemp(
//         "Khushi",
//          19,
//         ["Reading", "Singing"],
//          10
//     )
    
//     console.log(employes2.intoduce());
    

  