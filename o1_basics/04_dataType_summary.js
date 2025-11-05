// data types are categorized on the basis "how are they stored in the memoery"
//basically two types

// 1. Primitive => are of type "call by value"
// Primitive has approx 7 types in it. : string, number, boolean, symbol, undefined, null, BigInt


// let id = Symbol('123');
// let customId = Symbol('123');
// console.log(typeof(id));
// console.log(typeof(customId));

// console.log((id === customId)); => false

// const bigNumber = 5455485512245n
// console.log(typeof bigNumber); => bigint


//2. Reference Type (Non-Primitive) and it includes following

//Array, Function, and Object

// const names = ["Prakhar","Nishant","Manish","Hello"]
// const myObj = {
//     name:"Prakhar",
//     age:23
// }
// const myFunc = function(){
//     console.log(23);
// }

// console.log(typeof names);// =>object
// console.log(typeof myObj);// =>object
// console.log(typeof myFunc);// =>function aka function object



