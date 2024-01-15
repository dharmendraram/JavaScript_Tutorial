// dates 

let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);   // object

// let myCreateDate = new Date(2023,0,24);
// console.log(myCreateDate.toDateString());


// let myCreateDate = new Date(2023,0,24,5,30);
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("2023-03-12");
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("01-14-2012");
// console.log(myCreateDate.toLocaleString());

let myTime = Date.now()
// console.log(myTime);
console.log(Math.floor(Date.now()/1000));
