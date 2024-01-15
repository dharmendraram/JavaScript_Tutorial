function calculateCarPrice(...num1) {
  //spread operator
  return num1;
}
// console.log(calculateCarPrice(2));
// console.log(calculateCarPrice(2,3,4));

const user = {
  username: "Ram",
  price: 199,
};
function handelObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handelObject(user)
handelObject({
  username: "Shyam",
  price: 399,
});

const myArray = [200, 400, 400, 200];

function returnSecondValue(getArray){
        return getArray[2]
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,111,300]));
