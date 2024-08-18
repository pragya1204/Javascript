//Arrays part2

const marvel =["thor","spiderman","ironman"]
const dc=["batman","venom","flash"]

// console.log(marvel.concat(dc));//returns a new array
// console.log([...marvel, ...dc])//spread operator: adds two or more arrays
 
// const arr=[1, 2, 3, [4, 5, 6], 7, [8, 9]];
// console.log(arr.flat(Infinity));//flats an array 

console.log(Array.from("pragya"));
console.log(Array.from({name:"pragya"}));//interesting
let b1=100, b2=200,b3=300;
console.log(Array.of(b1,b2,b3));