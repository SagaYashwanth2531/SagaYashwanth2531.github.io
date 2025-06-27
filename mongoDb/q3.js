db.employees.find() // shows the db
db.employees.find().skip(1) //skips the first document
db.employees.find().limit(1)//shows only the 1st document 
db.employees.find().skip(1).limit(1)//shows only the 2nd document 
db.employees.find({department:"IT"}) //shows only users who belong to it department
db.employees.find({department:"IT"},{_id:0,name:1})
db.employees.find({department:"IT"},{_id:0,name:1,salary:1})
db.employees.find(
    {department:{$eq:"IT"}},
    {_id:0,name:1,salary:1}
)
db.employees.find(
    {salary:{$gt:300}},
    {_id:0,name:1,salary:1}
)
db.employees.find(
    {salary:{$gte:300}},
    {_id:0,name:1,salary:1}
)
db.employees.find(
    {salary:{$lt:2000}},
    {_id:0,name:1,salary:1}
)
db.employees.find(
    {salary:{$lte:2000}},
    {_id:0,name:1,salary:1}
)
db.employees.find(
    {salary:{$lte:2000},department:"IT"},
    {_id:0,name:1,salary:1}
)
db.employees.find(
    {$or:[{salary:{$lte:3000},department:"IT"}]},
    {_id:0,name:1,salary:1}
)
db.employees.find(
    {$or:[{salary:{$lte:2000},department:"IT"}]},
    {_id:0,name:1,salary:1}
)

db.employees.find(
  {
    $or: [
      { salary: { $lte: 2000 } },
      { department: "IT" }
    ]
  },
  { _id: 0, name: 1, salary: 1 }
)

db.employees.find(
    {$or:[{},{}]}
)

db.employees.find(
    {$and:[{},{}]}
)

db.employees.find(
    {department:{$eq}}
)


/*here $eq-equalsto
$gt->greaterthab
$gte-grater than and equal to
$lt=less than
$lte=lessthan equal to  */
