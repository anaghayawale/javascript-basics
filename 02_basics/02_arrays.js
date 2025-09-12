const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//this will push the entire array as a single element
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// ... spread operator
//this will spread the arrays and push each element individually
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5], 6, [7, [8, 9]]]

//const real_another_array = another_array.flat() // [1, 2, 3, 4, 5, 6, 7, [8, 9]]
const real_another_array = another_array.flat(Infinity) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(real_another_array);



console.log(Array.isArray("Anagha")) // false
console.log(Array.from("Anagha")) // [ 'A', 'n', 'a', 'g', 'h', 'a' ]
console.log(Array.from({name: "anagha"})) // interesting  // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]