//callbackfunction
const f1=()=>{
    console.log("Hello");
};
const main=(x)=>{
    x()
}
main(f1)
// ✅ What is a Callback Function?
// A callback function is:

// A function passed as an argument to another function,
// so that it can be called (or "called back") later inside that function.

// 🔹 Simple Analogy (Real Life)
// Imagine:

// You go to a tailor.

// You tell the tailor, “Call me when my dress is ready.”

// 👉 Here, your phone number is like the callback function.
// You're giving the tailor a way to call you later.

// What's Happening Step-by-Step?
// f1 is a function that logs "Hello"
// (this is our callback function)

// main is another function that takes a function x as a parameter

// When you call main(f1), you are passing f1 into main

// Inside main, it calls x(), which is actually f1()

// So Hello gets printed!

// // ✅ Summary:
// Term	Meaning
// Callback function	A function passed to another function
// Purpose	Run that function later or when needed
// Used in	Asynchronous code, events, APIs, setTimeout



//2.predoperatot

const add=(...a)=>
{
    console.log(a)
}
add(4,5,6,7,8,9)