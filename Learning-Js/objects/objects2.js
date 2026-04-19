
const tinder= new Object() // this is singleton object

const tinderUser= {} //this is a non singleton object

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// Now we will see Objects under Object

const regularUser={
    email: "abc@google.com",
    fullname: {
        userfullName:{
            firstname: "sam",
            lastname: "altman"
        }
    }
}

console.log(regularUser.fullname.userfullName["firstname"]);



// when we want to combine or merge two or more objects

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj4={5:"e", 6:"f"}

// 1st method
//const obj3=Object.assign({},obj1,obj2,obj4) // here we give empty parantheses (optional parameter) which assure all values will get combined and result will be correct but it is optional to give 
// if we didnt take {} at first then the obj1 will become target and all the values will get into obj1 but if we use {} then this will become target and all the value will comes inside it and this is optimize way to do this

// 2nd method (we use this mehtod mostly)
const obj3={...obj1,...obj2,...obj4}
console.log(obj3)



// When data comes from database it is in the form of array of objects 
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]
console.log(users[1].email);

console.log(Object.keys(tinderUser)); // Output data type will be array
console.log(Object.entries(tinderUser)); // here in output array under array comes
console.log(tinderUser.hasOwnProperty("name")); // this will check the property is exist or not and return true or false