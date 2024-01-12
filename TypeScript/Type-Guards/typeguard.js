// * A typeof guard in ts, lets your narrow down the type of a variable based on its runtime value.
// In ts, type narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain circumstances.
// This is particularly useful with union types and generic types.
var favHobbies = function (hobby) {
    //   return hobby.map((): void => {})
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(function () { });
    }
    else {
        console.log(hobby);
    }
};
// favHobbies("Coding");
favHobbies(["Coding", "Games"]);
