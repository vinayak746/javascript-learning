// singleton only form with constructors

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name :"Vinayak",
    [mySym] : "mykey1", //thats how yu define a symbol in a object 
    "fullname":"vinayak",//cant access this with dot operator
    age: 18,
    location:"delhi"

}
// console.log(JsUser.name);
// console.log(JsUser['fullname']);
// console.log(JsUser[mySym]);

// JsUser.age = 13
// Object.freeze(JsUser)
// JsUser.age=34
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
    
}
JsUser.greeting2= function(){
    console.log(`hello js user ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



