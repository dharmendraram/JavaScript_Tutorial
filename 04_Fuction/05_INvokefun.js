//Immediate INvoke functions

(function InvokeFun() {
  //named IIFE
  console.log("Hello Invoke Function");
})();

// ()() invoke function syntax  => it removes global scope pollutation problems

(() => {
  console.log("Hello Arrow Invoke Function");
})();

((name) => {
  console.log(`Hello , ${name}`);
})("Developer");
