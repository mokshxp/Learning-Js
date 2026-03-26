// For, While, Foreach

// For loop
// A for loop is generally used when you already know how many times you want the loop to run.
// It combines initialization, condition, and increment/decrement in a single line, which makes it more compact and readable for counting-based tasks.
// For example, if you want to print numbers from 0 to 4, a for loop is the best choice because the number of iterations is fixed.

// for(start; end; change){
// }

//Printing from 1-10

for(let i=1; i<=10; i++){
    console.log(i)
}

// While Loop
// a while loop is used when the number of iterations is not known beforehand and depends on a condition. 
// In this loop, only the condition is written inside the parentheses, while initialization and update are handled separately. 
// This makes it useful for situations where the loop should continue running until a certain condition becomes false, 
// such as waiting for user input or processing data until a limit is reached. However, if the condition is not updated properly,
// a while loop can easily become an infinite loop. 

// start
// while(end){
//     //code  
//     change
// }

let i=1
while(i<33){
    console.log(i);
    i++;
}

// do while

// A do...while loop is similar to a while loop, but with one important difference: 
// it always executes the code at least once, even if the condition is false from the beginning.
// In a do...while loop, the code block runs first and then the condition is checked afterward. 
// This makes it useful in situations where you want the loop to run at least one time no matter what, 
// such as taking user input at least once or displaying a menu before checking conditions.

let j=1
do{
    console.log(j)
    j++;
}
while(j<52)

//Break 

for(let x=1;x<201;x++){
    console.log(x)
    if(x===32){
    break;
    }
}

// The break statement terminates the entire loop immediately, transferring control to the first line of code following the loop. 

// Continue

for(let y=1; y<201; y++){
    if(y === 40){
        continue;
    }
    console.log(y)
}

// the continue statement skips the remaining code in the current iteration and jumps directly to the next iteration of the same loop. 

