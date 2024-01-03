// *------------------------
// * Enums in TS
// *-----------------------
//  Enums in ts are commonly used when you want to represent a set of related values and choose one value from multiple options.
//  Enums provide a convenient way to define a set of named values and associated them with specific meanings.
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Kajal",
    email: "kajalkp590@gmail.com",
    password: "Kaju@7205",
    role: Roles.admin
};
var user2 = {
    email: "vomod590@gmail.com",
    password: "vino@7205",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, email = user.email, role = user.role;
    return role === "admin" ? "".concat(email, " is allow to edit the website") : "".concat(email, " is not allow to edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
