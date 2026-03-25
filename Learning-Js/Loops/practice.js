// Q1. Print numbers from 1 to 10 using a for loop.

for(let i=1; i<=10; i++){
    console.log(i)
}

// Q2. Print numbers from 10 to 1 using a while loop.

let j=10
while(j>=1){
    console.log(j);
    j--;
}

// Q3. Print even numbers from 1 to 20 using a for loop.

for(let k=2; k<=20; k++){
    if(k%2==0){
        console.log(k)
    }
}

// Q4. Print odd numbers from 1 to 15 using a while loop.

let z=1;
while(z<=15){
    if(z%2!==0){
        console.log(z);
    }
    z++;
}

// Q5. Print the multiplication table of 5 (i.e., 5 × 1 = 5 … 5 × 10 = 50).

for(let x=1; x<=10; x++){
    console.log("5 * " + x +"="+(5*x))
}

// Q6. Find the sum of numbers from 1 to 100 using a loop.

let sum=0;
for(let f=1;f<101;f++){
    sum=sum+f;
    
}
console.log(sum)

// Q7. Print all numbers between 1 to 50 that are divisible by 3.

for(let a=1;a<=50;a++){
    if(a%3==0){
        console.log(a)
    }
    a++;
}