const accountId=1234   //no redeclear no reassign
//   accountId=12344
let accountName ="Saving"   //no redeclear but reassign
//  let accountName ="Current" 
var accountEmail ="abc@gmail.com"  //redeclear and reassign
var accountEmail ="ram@gmail.com"

console.log(accountId);
console.log(accountName);
console.log(accountEmail)

/*
donot use var 
because it problem block scope and functional scope
*/

console.table([accountId,accountName,accountEmail])