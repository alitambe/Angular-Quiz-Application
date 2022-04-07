// Load the module and create the reference
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch3";

mongoClient.connect(url,(err,client)=>{
    if (!err){
        console.log("Database successfully connected");
        let db = client.db(myDb);
        let emp = {_id:4,name:"Jayant",age:35,add:"Mumbai",Pincode:410208};
        db.collection("Employee").insertOne(emp,(err1,res)=>{
            if (!err1){
               console.log("Record Inserted Successfully"); 
            }else{
                console.log(err1);
            }
            client.close();
        })
    }else{
        console.log(err);
    }
    
})