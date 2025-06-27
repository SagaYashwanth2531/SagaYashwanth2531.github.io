db.employees.insertMany([
    {name:"amy",
        age:21,
        email:"amy@gmail.com",
        department:"HR",
        salary:2000,
        location:["NY","TX"],
        date:Date()
    },
    {name:"refeal",
        age:21,
        email:"refeal@gmail.com",
        department:"admin",
        salary:1500,
        location:["OH","TX"],
        date:Date()
    },
]);


db.employees.find(
{department:{$in:["Admin","HR"]}}

);
db.employees.find(
{department:{$nin:["Admin","HR"]}}

);