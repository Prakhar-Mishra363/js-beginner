//singleton => created through constructor

//object literal => creating an object
const mySym = Symbol("key1")
const User = {
    name : "Prakhar",
    email : "prakharmishra185@gmail.com",
    "age 18" : 22,
    [mySym] : "key2", //using symbol 
    location : "Kanpur",
    isLoggedIn : false
}// imp => keys are treated as sting internally i.e. => name => "name"

//accessing the properties of the object
// both are equivalent
// console.log(User.age);
// console.log(User["age"]);

//but if a property is declared where key is string then use square brackets to access

// console.log(User.age 18); ofcouse Invalid
// console.log(User["age 18"]); => valid

//accessing symbol

// console.log(User[mySym]);
// console.log(User);

User.email = "mprakhar.mca25@cs.du.ac.in"; //updating the object
// console.log(User);

//freezing the object

// Object.freeze(User)

//now if we try to update the user object then it will not throw any error but will not let the object to updat

User.email = "mprakhar769@gmail.com"

// console.log(User);

//adding function to the object

User.greeting = function(){
    console.log(`Hello user, ${this.name}`);
    return null;
}

// console.log(User.greeting); => will log undefined if we are returning nothing from the function
// console.log(User.greeting); => function(anonymous)

User.greeting()




