// function f1(num) {
//   return new Promise((resolve, reject) => {
    

//     if (num>=0) {
//       resolve(num); 
//     } else {
//     reject("Number is negative!"); 
//     }
//   });
// }
// function f2(x) {
//   console.log(x + 7);
// }

// f1(-5)
//   .then((n) => f2(n))       
//   .catch((err) => console.log(err)); 


/***==============API====================***/


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())   // 1. Response ko JSON mein convert karo
// .then((data)=>{            // 2. JSON data mil gaya, ab use karo
//     data.forEach((user)=>{
//         console.log(user.name,user.email); // 3. Har user ke liye loop chalao
//     })
// })
// .catch((err)=>console.log(err));



/*===========================================*/
const fetchData= async()=>{   //basically java script syncronous hai toh hame asyn banana hai q ki data fetch hone thak wait karna 
    const res=await fetch("https://jsonplaceholder.typicode.com/users") //waits till data is fetched
    const data=await res.json();  // waits till data is recived from res
    data.forEach((user)=>{
       console.log(user.name,user.email);
    })
};
fetchData();