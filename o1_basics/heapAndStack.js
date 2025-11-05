// for all primitive data types the copy of the variable is provided
//and as the non-primitive types are created in heap so their reference is provided

// let nameFirst = "Prakhar";
// let lastName = nameFirst;
// nameFirst = "Nothing";
// console.log(nameFirst); // =>Nothing
// console.log(lastName);  // =>Prakhar 
//this concludes that the copy of the "nameFirst" is assigned to lastName


let user1 = {
    email:"hello@gmail.com",
    upi : "jcbdwk@ybl"
}

let user2 = user1;
user2.email = "prakharmishra185@gmail.com";

console.log(user1.email); // =>prakharmishra185@gmail.com
console.log(user2.email); // =>prakharmishra185@gmail.com

//This concludes that user2 is provide with the reference of user1 instead of copy


