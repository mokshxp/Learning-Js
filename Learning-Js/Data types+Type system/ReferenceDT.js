// Arrays, Objects, Functions

// reference types are mutable and are stored as references in memory. 
// When you assign a reference type to a variable, you are assigning a reference to the value, not a copy of the value.
// This means that if you change the value of a reference type, it will affect all variables that reference that value.

//Array

let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 is assigned a reference to the same array as arr1

// Here arr2 is not a copy of arr1, but a reference to the same array in memory.
// If we change the value of arr1, it will affect arr2, and vice versa. This is because both arr1 and arr2 reference the same array in memory.
arr1.push(4);
console.log(arr2);

//Object

let obj1 = { name: "John", age: 30 };
let obj2 = obj1; // obj2 is assigned a reference to the same object as obj1
// Here obj2 is not a copy of obj1, but a reference to the same object in memory.
// If we change the value of obj1, it will affect obj2, and vice versa. This is because both obj1 and obj2 reference the same object in memory.
obj1.name = "Jane";
console.log(obj2);

//Function

function greet() {
    console.log("Hello, World!");
}
let greet2 = greet; // greet2 is assigned a reference to the same function as greet
// Here greet2 is not a copy of greet, but a reference to the same function in memory.
// If we change the value of greet, it will affect greet2, and vice versa. This is because both greet and greet2 reference the same function in memory.
greet = function() {
    console.log("Hi, there!");
}