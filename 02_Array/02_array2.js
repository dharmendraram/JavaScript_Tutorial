const marvle_heros = ["thor", "Ironman", "spiderman"];

const dc_heros = ["superman", "batman", "flash"];

// marvle_heros.push(dc_heros)
// console.log(marvle_heros);

// console.log(marvle_heros[3][2]);

//  const all_heros =marvle_heros.concat(dc_heros);

// console.log(all_heros);

const new_all_heros = [...dc_heros,...marvle_heros]
// console.log(new_all_heros);

const new_array=[1,2,3,4,5,[2,4,4,5,[2,4,5,7]]]
const real_array = new_array.flat(Infinity)
// console.log(real_array);

console.log(Array.isArray("Ram"))
console.log(Array.from("Dharmendra"));
console.log(Array.from({name:"Dharmendra"})); // instering   return empty array


let score1 =100
let score2 = 200
let score3 =400
console.log(Array.of(score1,score2,score3));