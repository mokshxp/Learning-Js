// Print numbers from 1 to 10

// for(let i=1; i<=10; i++){
//     console.log(i)
// }


// Print even numbers from 1 to 10

// for(let i=2; i<=10; i+=2){
//         console.log(i)
// }


// Print odd numbers from 1 to 10

// for(let i=1; i<10; i+=2){
//         console.log(i)
// }


// Print numbers from 1 to 20 that are divisible by 3

// for(let i=1; i<=20; i++){
//     if(i%3 === 0){
//         console.log(i)
//     }
// }


// Take a number (n) and print numbers from 1 to n

// let n= prompt("enter number")
// for(let i=1; i<=n; i++){
//     console.log(i)
// }


// Find the sum of numbers from 1 to 10

// let sum=0;
// for(let i=1; i<=10; i++){
//     sum=sum+i;
// }
// console.log(sum)


// Find the factorial of a given number

// let n= prompt("Enter a number: ")
// let fact=1;
// for(let i=1; i<=n; i++){
//     fact=fact*i;
// }
// console.log(fact)


// Print the multiplication table of a number

// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= 10; i++) {
//     console.log(n + " x " + i + " = " + (n * i));
// }


// Print numbers in reverse order (10 to 1)

// for(let i=10; i>=1; i--){
//     console.log(i)
// }


// Check whether a number is prime or not

// let n = Number(prompt("Enter a number:"));

// let isPrime = true;
// if (n <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log("Prime");
// } else {
//     console.log("Not Prime");
// }


// Print numbers from 1 to 50

// for(let i=1; i<=50; i++){
//     console.log(i)
// }


// Print numbers from 50 to 1

// for(let i=50; i>=1; i--){
//     console.log(i)
// }


// Print all multiples of 5 from 1 to 100

// for(let i=1; i<=100; i++){
//     if(i%5 === 0){
//         console.log(i)
//     }
// }

// Find sum of all even numbers from 1 to 50

// let sum=0;
// for(let i=1; i<=50; i++){
//     if(i%2 === 0){
//         sum=sum+i;
//     }
// }
// console.log(sum);


// Find sum of all odd numbers from 1 to 50

// let sum=0;
// for(let i=1; i<=50; i += 2){
//     sum+=i;
// }
// console.log(sum);

// Count how many numbers between 1 to 100 are divisible by 7

// let count=0;
// for(let i=1; i<=100; i++){
//     if(i%7 === 0){
//         count++;
//     }
// }
// console.log(count)

// Reverse a number

// let n= Number(prompt("Enter a Number: "));
// let reverse=0;

// while(n>0){
//     let digit= n%10;
//     reverse= reverse * 10 + digit;
//     n= Math.floor(n/10);

// }
// console.log("Reversed number is: ", reverse);


// Check if a number is palindrome

// let n= Number(prompt("Enter number : "))

// let original=n;
// let rev=0;

// while(n>0){
//     let digit=n%10;
//     rev= rev * 10 + digit;
//     n=Math.floor(n/10);
// }
// if(rev === original){
//     console.log("number is palindrome")
// }
// else{
//     console.log("not a palindrome")
// }
