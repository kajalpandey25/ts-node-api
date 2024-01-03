// *------------------------
// * Enums in TS
// *-----------------------

//  Enums in ts are commonly used when you want to represent a set of related values and choose one value from multiple options.
//  Enums provide a convenient way to define a set of named values and associated them with specific meanings.

enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?:string;
    email:string;
    password:string;
    role:Roles
}

const user1:LoginDetails = {
    name:"Kajal",
    email:"kajalkp590@gmail.com",
    password:"Kaju@7205",
    role:Roles.admin
}

const user2:LoginDetails = {
    email:"vomod590@gmail.com",
    password:"vino@7205",
    role:Roles.user
}

const isAdmin: (user: LoginDetails) => string = (user: LoginDetails) : string => {
       const {name, email, role} = user;
      return role === "admin" ? `${email} is allow to edit the website`: `${email} is not allow to edit the website`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));

