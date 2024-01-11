// ************************
// * INTERFACE VS TYPE
// ************************



// 1:
// use custom types when you need unions, intersections, or mapped types.
// Use interfaces when defining object shapes or classes that at here to a contract.

// 2:
// Interface can extend other interfaces to inherit their members.
// Custom types can use unions and intersection for more complex type compositions.

// same interface name treated as one


// Type

// type Stud = {
//     name:string;
//     age:number;
// };

// type StudAddr = {
//     city:string;
//     state:string;
// };

// type Data = Stud | StudAddr;

// // const BioData:Stud & StudAddr = {
// //     name:"kajal",
// //     age:22,
// //     city:'Gurugram',
// //     state:'Haryana',
// // };
// const BioData:Data = {
//     name:"kajal",
//     city:'Gurugram',
//     state:'Haryana',
// };
// console.log(BioData);




// Interface

interface Stud {
    name:string;
    age:number;
};

interface StudAddr {
    city:string;
    state:string;
};

interface Data extends Stud , StudAddr{}

// const BioData:Stud & StudAddr = {
//     name:"kajal",
//     age:22,
//     city:'Gurugram',
//     state:'Haryana',
// };
 class  BioData implements Data  {
   constructor(
    public name:string,
    public age:number,
    public city:string,
    public state:string
    ){}
};

const std1 = new BioData('Kajal', 22, 'Gurugram', 'Haryana');
console.log(std1);