//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(non_primitive)

let myTeamName="pirates"
let anotherName = myTeamName // allocating the copy here 
anotherName="Vinayak"
console.log(anotherName);
console.log(myTeamName);// not changes because it allocates the copy

let userOne = {
    email :"user@google.com",
    upi : "user.ybl"
}
let userTwo = userOne
userTwo.email = "vinayak@gmail.com"
console.log(userOne.email); //email changed here too because it changes the orignal value
console.log(userTwo.email);



