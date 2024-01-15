// array

const myArray =[1,2,3,4,3,5]

// console.log(myArray[2]);


// Array methods
// myArray.push(6); //add last one number
// myArray.pop();   //delete last number

// myArray.unshift(0) // add first number
// myArray.shift()   //delete first number

// console.log(myArray.includes(9));  // qusestion true or false

// const newArray =myArray.join()
// console.log(newArray);

// slice ,splice
 console.log("A", myArray);

 const myn2 = myArray.slice(1,3)  // slice print n-1 value
 console.log(myn2)

 console.log("B", myArray);


 const myn3 = myArray.splice(1,3) // original array change  and print array
 console.log(myn3)