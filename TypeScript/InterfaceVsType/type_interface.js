// ************************
// * INTERFACE VS TYPE
// ************************
;
;
// const BioData:Stud & StudAddr = {
//     name:"kajal",
//     age:22,
//     city:'Gurugram',
//     state:'Haryana',
// };
var BioData = /** @class */ (function () {
    function BioData(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
    return BioData;
}());
;
var std1 = new BioData('Kajal', 22, 'Gurugram', 'Haryana');
console.log(std1);
