// Array
// In Js arrays are Resizable
// In Array copy operation creates shallow copy 

const myArr= [1, 2, 3, 4, 5] 
console.log(myArr[2]);

const heroes= ["spiderman" , "superman" , "ironman"];
console.log(heroes[2]);

// we can also make arrays with the help of new keyword

const myArr2= new Array(1,2,3,4); // Here we dont have to use square brackets
console.log(myArr2[2]); 


// Array Methods

// 1. push
myArr.push(6) // This is used to add elements in the array 
console.log(myArr);

// 2. pop
myArr.pop() //Here we dont have to give any argument and it is use to remove the last element from the array
console.log(myArr);

// 3. join
const newArr= myArr.join() // It binds the element of Array and change the type of the data from array to string
console.log(newArr);
console.log(typeof newArr);

// 4. Slice and Splice --> sometimes interviewwer aks ques from this

console.log("A ", myArr);
//slice
const myn1= myArr.slice(1, 3); // here 1 to 2 element will get sliced from the array and last index dont get include
console.log(myn1);
console.log("B ", myArr);


const myn2= myArr.splice(1, 3); // In splice last number are included
console.log("C ", myArr);
console.log(myn2);


