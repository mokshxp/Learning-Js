// Arithmatic, Assignment, Comparison, Logical, unary, ternary, bitwise, typeof, void, delete

// Arithmatic Operators
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // Output: 0 (remainder of 10 divided by 5)
console.log(a ** b); // Output: 100000 (10 raised to the power of 5)

// Assignment Operators
let c = 10;
c += 5; // Equivalent to c = c + 5
console.log(c); // Output: 15
c -= 3; // Equivalent to c = c - 3
console.log(c); // Output: 12
c *= 2; // Equivalent to c = c * 2      
console.log(c); // Output: 24
c /= 4; // Equivalent to c = c / 4
console.log(c); // Output: 6
c %= 5; // Equivalent to c = c % 5
console.log(c); // Output: 1
c **= 3; // Equivalent to c = c ** 3
console.log(c); // Output: 1 (1 raised to the power of 3 is still 1)    

// Comparison Operators
console.log(a == b); // Output: false (loose equality, checks value only)
console.log(a === b); // Output: false (strict equality, checks value and type)
console.log(a != b); // Output: true (loose inequality, checks value only)
console.log(a !== b); // Output: true (strict inequality, checks value and type)
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false

// Logical Operators
let x = true;
let y = false;
console.log(x && y); // Output: false (logical AND)
console.log(x || y); // Output: true (logical OR)
console.log(!x); // Output: false (logical NOT)

// Unary Operators
let num = 5;
console.log(-num); // Output: -5 (unary negation)
console.log(+num); // Output: 5 (unary plus, does not change the value) 

// Example: if we have any string "5" and we want to convert it to a number, we can use the unary plus operator:
let str = "5";
let numFromStr = +str;
console.log(numFromStr); // Output: 5 (string "5" is converted to number 5)

//Typeof Operator
console.log(typeof a);
console.log(typeof x);
console.log(typeof str);
console.log(typeof numFromStr);


// Ternary Operator
//?: is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is as follows:
condition ? expressionIfTrue : expressionIfFalse;

// Example:
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote yet.";
console.log(canVote); // Output: "Yes, you can vote!" (because age is 18, which is greater than or equal to 18)


//instanceof Operator
// The instanceof operator is used to check if an object is an instance of a specific class or constructor function. It returns true if the object is an instance of the specified class, and false otherwise. The syntax is as follows:
object instanceof constructor
// Example:
function Person(name) {
    this.name = name;
}
let person = new Person("Alice");
console.log(person instanceof Person); // Output: true
console.log(person instanceof Object); // Output: true (because all objects in JavaScript are instances of the Object class)
console.log(person instanceof Array); // Output: false (because person is not an instance of the Array class)


// 1. Logical AND (&&) Operator with Ternary Operator
let IsLoggedIn = true;
let hasToken = false;

let access= IsLoggedIn && hasToken ? "Access Granted" : "Access Denied";
console.log(access); // Output: "Access Denied" (because hasToken is false, the condition IsLoggedIn && hasToken evaluates to false)

//increase and decrease operators
let count = 0;
console.log(count++); // Output: 0 (post-increment, returns the value before incrementing)
console.log(count); // Output: 1 (the value of count is now 1 after the post-increment)

count = 0;
console.log(++count); // Output: 1 (pre-increment, increments the value before returning it)
console.log(count); // Output: 1 (the value of count is still 1)
