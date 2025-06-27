//function
//->regular fucntion
// function greet()
// {
//     console.log("Good Afternoon")
// }
// greet()  // only prints if we call the fucntion

//IIFE mtethodfunction greet() IIFE means a function that:

// Is defined and called immediately

// Runs once, without being called later 

(function greet() {
    console.log("Good Afternoon");
})();
//arguments in function
function add(a,b)
{
    console.log(a+b);
}
add(10,20)
function mul(a,b)
{
    return a*b
}
const result=mul(5,5)
console.log(result)