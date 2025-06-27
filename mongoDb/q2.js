db.employees.insertOne({
    name:"John Smith",
    email:"john@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    data:Date()
})


db.employees.insertMany([
    {name:"yash",
        age:21,
        email:"yash@gmail.com",
        department:"IT",
        salary:2456,
        location:["Fl","TX"],
        date:Date()
    },
    {name:"cattg",
        age:21,
        email:"caty@gmail.com",
        department:"IT",
        salary:2456,
        location:["AZ","TX"],
        date:Date()
    },
]);
db.employees.find()