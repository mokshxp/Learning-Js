//primitive data types are immutable, meaning they cannot be changed. 
//When you assign a primitive value to a variable, it creates a new copy of that value in memory. 
//If you change the value of the variable, it does not affect the original value.

// Example of primitive data types
let name = "John";
let age = 30;
let isStudent = true;
let nullValue = null;
let undefinedValue;


// Changing the value of a primitive variable 
name = "Jane";
age = 25;
isStudent = false;
nullValue = "Now I have a value";
undefinedValue = "Now I am defined";
console.log(name); // Output: Jane
console.log(age);
console.log(isStudent); // Output: false
console.log(nullValue); // Output: Now I have a value
console.log(undefinedValue); // Output: Now I am defined


//primitives data types include:
// 1. String: A sequence of characters enclosed in single or double quotes. Example: "Hello", 'World'
// 2. Number: Represents both integer and floating-point numbers. Example: 42, 3.14
// 3. Boolean: Represents a logical value that can be either true or false. Example: true, false
// 4. Null: Represents the intentional absence of any object value. Example: null
// 5. Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined
// 6. Symbol: Represents a unique identifier. Example: Symbol('description')
// 7. BigInt: Represents integers with arbitrary precision. Example: 9007199254740991n

let d=12;
let b=d; //b is assigned the value of d, which is 12

// Here b get a copy of the value of d, so if we change the value of d, it will not affect b.
// If  we change the value of b, it will not affect d. This is because primitive data types are immutable and are stored as separate copies in memory.


//String

// ' ' is a single quote, " " is a double quote, and ` ` is a backtick.
// In JavaScript, you can use any of these three types of quotes to define a string. 
// The choice between them is often a matter of style and convenience. 
// For example, if you want to include a single quote within a string, you can use double quotes to define the string, and vice versa. 
// Backticks are used for template literals, which allow for embedded expressions and multi-line strings.

//number

// In JavaScript, there are two types of numbers: integers and floating-point numbers.
// Integers are whole numbers without a decimal point, while floating-point numbers are numbers that have a decimal point. 
// JavaScript uses the IEEE 754 standard for representing numbers, which means that all numbers in JavaScript are stored as 64-bit floating-point values. 
// This can lead to some precision issues when working with very large or very small numbers, or when performing certain mathematical operations. 
// However, for most practical purposes, JavaScript's number type is sufficient for handling a wide range of numerical values.

//Boolean

// In JavaScript, a boolean is a primitive data type that can only have two values: true or false.
// Booleans are often used in conditional statements and logical operations to control the flow of a program.
// For example, you can use a boolean to check if a condition is met and execute a block of code accordingly:
let isRaining = true;

if (isRaining) {
    console.log("Don't forget to take an umbrella!");
}
// In this example, the boolean variable isRaining is set to true, so the message "Don't forget to take an umbrella!" will be printed to the console.

// You can also use booleans in logical operations, such as AND (&&), OR (||), and NOT (!):
let isSunny = false;
if (isRaining && isSunny) {
    console.log("It's a rainbow!");
}

//null

// In JavaScript, null is a primitive data type that represents the intentional absence of any object value. 
// It is often used to indicate that a variable has no value or that an object property is empty. 
// When you assign null to a variable, it means that the variable does not point to any object in memory.

let emptyValue = null;
console.log(emptyValue); // Output: null

//Undefined

// In JavaScript, undefined is a primitive data type that represents a variable that has been declared but has not been assigned a value. 
// When you declare a variable without assigning a value to it, it is automatically assigned the value of undefined.

let z;
console.log(z); // Output: undefined

//Symbol

// In JavaScript, a Symbol is a unique and immutable primitive data type that is often used to create unique identifiers for object properties. 
// Each time you create a new Symbol, it is guaranteed to be unique, even if it has the same description as another Symbol.
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // Output: false
// In this example, sym1 and sym2 are two different Symbols, even though they have the same description.

//BigInt

// In JavaScript, BigInt is a primitive data type that represents integers with arbitrary precision. 
// It was introduced in ECMAScript 2020 to allow for the representation of integers larger than the maximum safe integer (2^53 - 1) that can be represented by the Number type.
let bigIntValue = 9007199254740991n; // The 'n' suffix indicates a BigInt literal
console.log(bigIntValue); // Output: 9007199254740991n

