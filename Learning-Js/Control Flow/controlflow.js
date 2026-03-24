//if else else-if
let age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("Congratulations on reaching adulthood!");
} else {
    console.log("You are an adult.");
}

// 2nd example

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >=80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else {
    console.log("Grade: D");
}

// Switch statement
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;  
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;  
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
        break;
}

//2nd example

switch (3){
    case 1:
        console.log("Value is 1");
        break;
    case 2:
        console.log("Value is 2");
        break;
    case 3:
        console.log("Value is 3");
        break;
    default:
        console.log("Value is not 1, 2, or 3");
        break;
}



function getval(val){
    if(val<25) return "D";
    else if(val<50) return "C";
    else if(val<75) return "B";
    else return "A";
}
console.log(getval(80));

//Practice

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } else if (score >= 80 && score <= 89) {
        return "A";
    } else if (score >= 70 && score <= 79) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 33 && score <= 59) {
        return "D";
    } else if (score >= 0 && score <= 32) {
        return "Fail";
    } else {
        return "Invalid marks";
    }
}

console.log(getGrade(55));
