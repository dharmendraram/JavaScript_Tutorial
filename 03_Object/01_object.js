// singletone

//object literals
const myobjct = Symbol("mykey1");

const JsUser = {
  name: "Dharmendra",
  age: 26,
  [myobjct]: "mykey1",
  number: 983873672,
  location: "kathmandu",
  email: "dhrmendra@gmail.com",
  lastlogin: ["monday", "Friday"],
};

console.log(JsUser);
// console.log(JsUser.email);

JsUser.email = "ram@gmail.com"
console.log(JsUser);

Object.freeze(JsUser)

JsUser.email="sita@gami.com"

console.log(JsUser);
