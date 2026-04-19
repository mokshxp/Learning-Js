// Singleton
// Object.create // This is created with the help of constructor method 


// Object literals

const mySym= Symbol("mykey1"); // If we ever want to use the symbol as a key then we take it into sqaure brackets []

const Jsuser={
    name: "James",
    [mySym]: "mykey1", // here key will be also be in square brackets then only the printed element will have symbol data type and if we want to tuse symbol as a keyword then that key shoulbe be in square brackets
    age: 18,
    location: "jaipur",
    email: "james@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "wednesday"],
}

console.log(Jsuser.email); // We can acces object by this but this is not a correct way to acces objects there are some better ways than this
console.log(Jsuser["email"]);
console.log(Jsuser.mySym); // here it is printing but mySym is still are not using as a Symbol data type if we want to use datatype as a symbol then we use
console.log(Jsuser[mySym]);


// If we want to change the values of the keys in an object-->

Jsuser.email = "alex@google.com"
// Object.freeze(Jsuser) // This is used to freeze the value of the object so that no one can modify the value of it
Jsuser.email= "Eren@microsoft.com" // here we updated the value of email but it will not overwrite old value
console.log(Jsuser);

// Now we will add functions

Jsuser.greeting= function(){
    console.log("Hello Js user");
}
console.log(Jsuser.greeting);

Jsuser.greeting2= function(){
    console.log(`Hello Js user, ${this.name}`); // this is used to reference the same object like in jsuser what are the keys and its values
}
console.log(Jsuser.greeting2());

