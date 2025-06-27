//objects
const student=
{
    name:"Yash",
    age:21
}
console.log(student);
console.log(student.name);
console.log(student["name"]);
console.log(student.age);
student.city="Hyderabad"
console.log(student);
delete student.age
console.log(student);

const keys=Object.keys(student)
console.log(keys)

const values=Object.values(student)
console.log(values);


const cart={
    ProductId:1,
    Quantity:5,
    1:5,
    3:1,
    5:2
};
const items=Object.keys(cart).length
console.log(items);

cart[3]=2
console.log(cart);

