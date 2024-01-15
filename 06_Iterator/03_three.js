// for in 
const myObject ={
    js: "JavaScript",
    py: "Python",
    java: "Java"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}