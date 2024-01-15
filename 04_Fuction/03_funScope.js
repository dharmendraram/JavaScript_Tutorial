if (true) {
  let a = 30; // block scope
  const b = 40;
  var c = 30; // global variable
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
  const username ="Dharmendra"
  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website); not access
  two()
}
// one()

if(true){
    const username = "Ram"
    if (username==="Ram") {
      const website = " Youtube"

      // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ************************Instersting ************************

console.log(addTwo(4));
function addTwo (num){
  return num +2
}

// addThree(3)
const addThree= function(num){
  return num + 3
}