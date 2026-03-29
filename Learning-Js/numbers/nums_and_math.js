// Numbers

const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance); 
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber= 123.8966
// console.log(otherNumber.toPrecision(3));


const number= 100000;
// console.log(number.toLocaleString('en-IN'))
// There are more properties of Number. Here we have used few to see how these properties work

// Maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.min(3,5,6,2,8,9));
console.log(Math.max(3,5,6,2,8,9));

// Math libraries are used in Math.random and Math.random values are always comes in between 0 to 1

console.log(Math.random());
console.log((Math.random()*10) + 1); // we use +1 to make sure values dont come in zero like 0.042133
console.log(Math.floor(Math.random()*10)+ 1); // Sometimes is if values comes in form of like 0.1...,0.2... , then Math.floor make it 0 and if we dont want it we will use +1 to avoid zero

