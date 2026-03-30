// what why how


// what function
// console.log("hello")
// here you can see if we write code then that code will execute and print it instantly but what if we want to reuse that code again 
// and again then we have to write that code again and again which is not good practice so we can use function to reuse that code.


// function is a block of code that can be reused and it can take input and return output and the code will execute when we call the function.
// function declaration
// function lolo(){
//     console.log("hello, how are you")
// }
// lolo();


// Another way to create function and this is called Function Expression
// let fnc= function(){
// console.log("hello, how are you")
// }
// fnc();
// Here you can see we have created a function and assigned it to a variable and we can call that function using that variable name.


// Arrow function or can say Fat Arrow Function

// let fncn=()=>{
//     console.log("hello JS Learners")
// }
// fncn();


// Parameters and Arguments

// example 1
// function dance(v1){
//     console.log(`${v1} is dancing`);
// }
// dance("James");
// dance("Alice");
// dance("Arthur");
// dance("Adam");

// example 2
// function add(v1 , v2){
// console.log(v1 + v2);
// }
// add(6 , 5);
// add(66 , 55);


// default, rest and spread parameters

// Default parameters -->
function add(v1 = 0, v2 = 0){
    console.log(v1 + v2);
}
// add();
// Default parameters are used to set default values for the parameters in case we don't pass any value while calling the function.
// In the above example if we don't pass any value then it will take default value as 0 and will return 0.


// Rest parameters -->
// function abcd(...val){
//     console.log(val);
// }
// abcd(1,2,3,4,5,6,7,8,9,10);
// when arguments are too many then we have to make same number of parameters in the function but 
// with rest parameters we can take any number of arguments and it will return an array of those arguments.
// (...) is both rest and spread operator but it depends on the context in which it is used. 
// If it is used in function parameters then it is rest operator and if it is used in function call then it is spread operator.


// First Class Functions -->

// First class functions are those functions which can be treated as values and can be passed as arguments to other functions and can be returned from other functions.

// example 1
// function abcd(val){
//     val();
// } 
// abcd(function(){
//     console.log("hello");
// });

// Higher order function

