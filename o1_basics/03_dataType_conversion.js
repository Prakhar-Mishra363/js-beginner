// let score = "33a"; // only while doing it with "null" we get 0 (conversion to number) and similar "NaN" behaviour is found wile doing this with undefined

// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(valueInNumber)   // Nan => Because we are performing invalid operation here, and "NaN===NaN => False" so rather use isNaN() for verification or "Number.isNaN()"
// console.log(typeof(valueInNumber)); //Number but why?

//---------------------------------------
//conversion of number to boolean

// let isLoggedIn = undefined
// let booleaIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleaIsLoggedIn);


//0,null,NaN,"" and defined converts to false
// any value other than 0,null,NaN,"" and undefined converts to true

//-----------------------------------------
//coversion to string

let someText = NaN
let stringSomeText = String(someText)
console.log(stringSomeText);
console.log(typeof stringSomeText);// string

//null converts to string but value is null and the same goes for the undefined and NaN
//
