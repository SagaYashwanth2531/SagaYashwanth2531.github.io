
// Hoisting means moving declarations to the top of the code by JavaScript before it runs.

// JavaScript automatically "hoists":
// Function declarations

// Variable declarations (but not their values)
// greet()
// function greet(){
//    console.log("hello")
// }

// greet(); // ❌ Error: Cannot access 'greet' before initialization

// let greet = function() {
//   console.log("Hi!");
// };
// This will give an error because function expressions are not hoisted the same way.

// Only the variable greet is hoisted, not the function body.

//arrow function
// fun()  // hoisting doesnot work in arrow function
let fun=(a,b)=>{
    console.log(a+b)

}
//has to call after the fucntion
fun(10,50)


let mul=(a,b)=>{
    return a*b

}
let ans=mul(10,10);
console.log(ans);