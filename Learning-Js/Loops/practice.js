// Q1. Print numbers from 1 to 10 using a for loop.

// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// Q2. Print numbers from 10 to 1 using a while loop.

// let j=10
// while(j>=1){
//     console.log(j);
//     j--;
// }

// Q3. Print even numbers from 1 to 20 using a for loop.

// for(let k=2; k<=20; k++){
//     if(k%2==0){
//         console.log(k)
//     }
// }

// Q4. Print odd numbers from 1 to 15 using a while loop.

// let z=1;
// while(z<=15){
//     if(z%2!==0){
//         console.log(z);
//     }
//     z++;
// }

// Q5. Print the multiplication table of 5 (i.e., 5 × 1 = 5 … 5 × 10 = 50).

// for(let x=1; x<=10; x++){
//     console.log("5 * " + x +"="+(5*x))
// }

// Q6. Find the sum of numbers from 1 to 100 using a loop.

// let sum=0;
// for(let i=1;i<101;i++){
//     sum=sum+i;
    
// }
// console.log(sum)

// Q7. Print all numbers between 1 to 50 that are divisible by 3.

// for(let a=1;a<=50;a++){
//     if(a%3===0){
//         console.log(a)
//     }
//     a++;
// }

// Q8. Ask the user for a number and print whether each number from 1 to that number is odd or even
// (e.g., “1 is odd”, “2 is even”, …)

// let val= prompt("give a number")

// for(let g=1; g<=val; g++){
//     if(g%2===0){
//         console.log(g+" is Even")
//     }
//     else{
//         console.log(g+" is odd")
//     }
// }

// Q9. count how many numbers between 1 to 100 are divisible by both 3 and 5.

// let count=0;
// for(let p=1;p<=100;p++){
//     if(p%3 === 0 && p%5 === 0){
//         count++;
//     }
// }
// console.log(count)

// Now using Break and Continue

// Q1. stop at First Multiple of 7
// Write a loop from 1 to 100 that:
// -Print each number
// -Stop completely when its finds the first number divisible by 7

// for(let l=1; l<=100; l++){
//     console.log(l)
//     if(l%7===0){
//         break;
//     }
    
// }


//  Q2: Skip Multiples of 3

// Write a loop from 1 to 20 that:
// • Skips numbers divisible by 3
// • Prints all others

// 💡 Use continue

// Expected output:
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)

// for(let i=1; i<=20; i++){
//     if(i%3 === 0){
//         continue;
//     }
//     console.log(i)
// }


// Q3: Print First 5 Odd Numbers Only

// Write a loop from 1 to 100 that:
// • Prints only 5 odd numbers
// • Then stops the loop

// 💡 Use both if, continue, and a counter + break

// Expected output:
// 1 3 5 7 9

// let count = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) continue;

//     console.log(i);
//     count++;

//     if (count === 5) break;
// }
