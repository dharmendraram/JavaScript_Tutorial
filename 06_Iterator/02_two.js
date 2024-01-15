//for of
// ["" ,"" ,""]
// [{},{},{}]

const arr=[2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
}

const greetings ="Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

const map =new Map()
map.set('IN',"India")
map.set('NP',"Nepal")
map.set('PK',"Pakistan")
// map.set('NP',"Nepal")

// console.log(map);
for (const [key,value] of map) {
    // console.log(key, ":-",value);   
}

