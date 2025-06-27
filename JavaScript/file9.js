// Arrays

// const score=[2,1,7,5,3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score);
// console.log(score.length)
// score1=[7,8,9]
// const newScore=[...score1,9]
// console.log(newScore);

// const cart={
//     1:5,
//     5:3
// }
// const newCart = { ...cart, 2: 1 }; // ✅ no parentheses
// console.log(newCart);


// const products=[
//     {id:1,name:"Product 1",price:25},
//     {id:1,name:"Product 2",price:50},
//     {id:1,name:"Product 3",price:75},
// ]

// console.log(products);


// function addToCart(id, cart) {
//     return { ...cart, [id]: 1 };
// }

// let cart = {};
// cart = addToCart(1, cart);
// cart = addToCart(3, cart);

// console.log(cart);



// function addToCart(id) {
    
//     cart = {...cart,[id]: (cart[id] || 0) + 1};
// }

// addToCart(1);
// addToCart(3);
// addToCart(1); 

// console.log(cart);



// let cart = {}; 

// function addToCart(id) {
//     cart = { ...cart,[id]: (cart[id] || 0) + 1
//     };
// }

// addToCart(1); 
// addToCart(3); 
// addToCart(1); 

// console.log(cart);
/*==================Array Methods********* */
const score=[2,1,4,5,6];
// // score.forEach((value,index,arr)=>{
// //     console.log(value,index,arr);
// })   
// in the place of value we can keep any name for sounding meaningful we write value
/** basically in foreach first argument is for value and second arg is for index and the third value represents array */


//2Array.map();

const newscore=score.map((value)=>{
   return value>2;
})

console.log(newscore);

//3.array.filter()


const news=score.filter((value)=>{
    return value>2;
})
console.log(news);
/*array.filter() is a JavaScript method that creates a new array by keeping only the elements that pass a test (condition). */


const yash=score.find((value)=>{
    return value>2;
})
console.log(yash);  /*array.find() is a JavaScript method that returns the first item in the array that matches a condition.

 */


// arrays.reduce

const ya = score.reduce((sum, value) => sum + value, 0);

console.log(ya);