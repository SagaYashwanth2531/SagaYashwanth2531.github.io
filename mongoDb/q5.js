db.employees.updateOne(
    {email:"yash@gmail.com"},//filter
    {$set:{salary:4000}} //what you want to update

)
db.employees.updateMany(
    {},
    {$set:{point:1}}
);
db.employees.updateMany(
    {department:"IT"},
    {$inc:{point:1}}
);
db.employees.updateOne(
    {email:"krish@gmail.com"},
    {$set:{name:"krish",department:"HR",salary:2700}},
    {upsert:true}
);

//delete document
db.employees.deleteOne(
    {email:"krish@gmail.com"}
    
)
db.employees.deleteMany({department:"Admin"})

db.employees.find().sort({name:-1});
db.employees.find().sort({salary:-1}).limit(1);
db.employees.find().sort({salary:-1}).limit(3);

db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
);
db.employees.updateMany(
    {department:"IT"},
    {$push:{points:5}}
)
db.employees.updateMany(
  {},
  { $pull: { points: { $gt: 3 } } }
);

