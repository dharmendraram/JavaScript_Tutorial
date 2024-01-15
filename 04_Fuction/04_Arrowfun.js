const user={
    username : "Ram",
    price : 9939,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Shyam"
// user.welcomeMessage()


// ***************Arrow function*************

// () => {}

const User = () =>{
    let username = "Ram"
    console.log(this);
}
// User()

// const addTwo = (num1,num2) => (num1 + num2)
// const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => ({username: "Ram"})

console.log(addTwo(5,5));