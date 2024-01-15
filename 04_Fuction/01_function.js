// function sayMyName(){
//     console.log("R");
//     console.log("A");
//     console.log("M");
// }
// sayMyName()

//parameterazie function
function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}
// addTwoNumber(20,30)
// addTwoNumber("20",4)
// addTwoNumber(2,"a")

// const result = addTwoNumber(2,3)
// console.log("result",result);

function addThreeNumber(num1, num2, num3) {
  // console.log(num1+num2);
  let result = num1 + num2 + num3;
  return result;
}
const result = addThreeNumber(2, 3, 4);
// console.log(result);

// function loginUser(username) {
function loginUser(username="Shyam") {

//   if (username === undefined) {
    if(!username){
    console.log("Please enter the Username");
    return;
  }
  return `${username} just loggiend in`;
}
// console.log(loginUser("Ram"));
console.log(loginUser("Ram")); // undefined
