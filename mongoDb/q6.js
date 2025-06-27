db.employees.find(
  { $or:[{salary:{$gt:3000}},{department:"IT"}]},
   {name:1,_id:0}
)


//aggregation pipeline
db.employees.updateMany(
    {},
    {$addToSet:{location:"FL"}}

)

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      bonus: { $multiply: ["$salary", 2] }
    }
  }
])
db.employees.aggregate([
  {
    $project: {
      
      name: 0,
    
    }
  }
])

db.employees.aggregate([
    {$group:{_id:"$department",
      total:{$sum:"$salary"}}
    }
])
db.employees.aggregate([
    {$group:{_id:null,
      total:{$sum:"$salary"}}
    }
])

//create new collcetion named orders
// _id:
// empId:
// orderValue:

db.orders.insertOne({
    empId: ObjectId('685d0db6d6578de801748a5f'),
    ordervalue: 1200
})
db.orders.insertOne({
    empId:  ObjectId('685d0db6d6578de801748a60'),
    ordervalue: 1300
})
db.orders.insertOne({
    empId:  ObjectId('685d0db6d6578de801748a61'),
    ordervalue: 1500
})
db.orders.insertOne({
    empId:  ObjectId('685d0ddad6578de801748a62'),
    ordervalue: 2000
})


db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders"
    }
  },
  { $unwind: "$orders" },
  { $project: { name: 1,salary:1, "orders.ordervalue": 1 } },
  {$match:{salary:{$gt:2000}}}
])



//
db.empCountry.insertOne({
 empId:ObjectId('685d0ddad6578de801748a62'),
 country:"USA"

})
db.empCountry.insertOne({
 empId: ObjectId('685d0db6d6578de801748a61'),
 country:"AUS"

})

db.employees.aggregate([
  {
    $lookup: {
      from: "empCountry",
      localField: "_id",
      foreignField: "empId",
      as: "country"
    }
  },
  { $unwind: "$empCountry" },
  { $project: { name: 1,"empCountry.country": 1 ,"orders.ordervalue":1} },

 
])
db.employees.aggregate([
  {
    $lookup: {
      from: "empCountry",
      localField: "_id",
      foreignField: "empId",
      as: "country"
    }
  },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders"
    }
  },
  { $unwind: "$country" },
  { $unwind: "$orders" },
  {
    $project: {name: 1,"country.country": 1,"orders.ordervalue": 1
    }
  }
])


db.employees.createIndex({"email":1})
db.employees.getIndex()
 db.employees.dropIndex("email_1")
 db.employees.find({"email":"john@gmail.com"}).explain("executionStats")


 db.employees.aggregate