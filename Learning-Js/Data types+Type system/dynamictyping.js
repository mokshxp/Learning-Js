//Dynamic typing

// It is important to note that JavaScript is a dynamically typed language, which means that variables can hold values of any type and can change their type at runtime.
// For example, you can assign a string value to a variable and then later assign a number value to the same variable without any issues:
let myVariable = "Hello, World!"; // myVariable is a string
console.log(myVariable); // Output: Hello, World!
myVariable = 42; // myVariable is now a number
console.log(myVariable); // Output: 42
// This flexibility can be both a strength and a weakness of JavaScript. It allows for more dynamic and flexible code, but it can also lead to unexpected behavior if not used carefully.



//Types of quirks in JavaScript

// 1. Type coercion: JavaScript automatically converts values from one type to another when necessary, which can lead to unexpected results. For example:
console.log(5 + "5"); // Output: "55" (number 5 is coerced to a string)
console.log("5" - 2); // Output: 3 (string "5" is coerced to a number)


// 2. NaN (Not a Number): NaN is a special value that represents an invalid number. It can be the result of an undefined mathematical operation, such as dividing zero by zero or taking the square root of a negative number. For example:
console.log(0 / 0); // Output: NaN
console.log(Math.sqrt(-1)); // Output: NaN

// 3. Falsy values: In JavaScript, certain values are considered "falsy," meaning they evaluate to false in a boolean context. These include false, 0, "", null, undefined, and NaN. For example:
if (!0) {
    console.log("0 is falsy");
}
if (!"") {
    console.log("An empty string is falsy");
}
if (!null) {
    console.log("null is falsy");
}
if (!undefined) {
    console.log("undefined is falsy");
}
if (!NaN) {
    console.log("NaN is falsy");
}

//truthy values: In JavaScript, certain values are considered "truthy," meaning they evaluate to true in a boolean context. These include all values that are not falsy, such as non-empty strings, non-zero numbers, objects, and arrays. For example:
if ("Hello") {
    console.log("A non-empty string is truthy");
}
if (42) {
    console.log("A non-zero number is truthy");
}
if ({}) {
    console.log("An object is truthy");
}
if ([]) {
    console.log("An array is truthy");
}


// 4. Equality comparisons: JavaScript has two types of equality comparisons: strict equality (===) and loose equality (==). Strict equality checks for both value and type, while loose equality performs type coercion before comparing values. This can lead to unexpected results when using loose equality. For example:
console.log(0 == false); // Output: true (0 is coerced to false)
console.log(0 === false); // Output: false (0 is a number, false is a boolean)
console.log("" == false); // Output: true (empty string is coerced to false)
console.log("" === false); // Output: false (empty string is a string, false is a boolean)  

// 5. Variable hoisting: In JavaScript, variable declarations are hoisted to the top of their scope, which can lead to unexpected behavior if not understood properly. For example:
console.log(myVar); // Output: undefined (myVar is hoisted but not assigned a value)
var myVar = 10;
console.log(myVar); // Output: 10 (myVar is now assigned a value)


