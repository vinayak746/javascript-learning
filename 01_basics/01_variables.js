const accountId = 122334
let accountEmail = "vinayak@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountstate;

// accountId=2 not allowed
accountEmail = "ha@goo.com"
accountPassword = "22222"
accountCity="chandigarh"
console.log(accountId);
/*
Prefer to not use
var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate]);
