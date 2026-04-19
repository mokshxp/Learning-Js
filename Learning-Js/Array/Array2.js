// some new methods of array 

// 1. problematic way
const marvel_heros= ["thor", "ironman", "hulk"];
const Dc_heros= ["flash", "superman", "batman"];

// marvel_heros.push(Dc_heros); // When we push one array into another then that array will become element of the Array where we pushed it and it creates 
// // problem when we want to access the elements from the array which are pushed in anohter array and this trick is also not appropriate and push update existing array
// console.log(marvel_heros); // You can see here the output

// 2. Right way

const allHeros= marvel_heros.concat(Dc_heros);
console.log(allHeros); // Here elements can get properly merged


//Another easy way to do this is by using spread operator
const all_new_heros= [...marvel_heros, ...Dc_heros];
console.log(all_new_heros);


// 3. Anothing things about Array which can be helpful in data scraping

console.log(Array.isArray("lang")); // output will be false because this is not a array
// but if we want to convert it into a array then we use (From)

console.log(Array.from("lang")); // here you can see the string get converted into an array

// What if we give an Object
console.log(Array.from({name: "Alex"})); // if we print this we will get an empty array but if we want an array then we have to tell
// that what we want to change into an array like if we want keys or we want values to be change into an array [Interesting case which might get asked in an interview]

// 4. what if we want to convert multiple variable or an array into an array then we use [.of] it returns new array from set of elements

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));    