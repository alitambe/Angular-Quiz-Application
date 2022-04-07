// Load the module and create the reference
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch3";

mongoClient.connect(url,(err,client)=>{
    if (!err){
        console.log("Database successfully connected");
        let db = client.db(myDb);
        db.collection("Employee").updateOne({_id:102},{$set:{age:30}},(err1,res)=>{
            if (!err){
                if (res.modifiedCount > 0 || res.matchedCount > 0) {
                    console.log("Record Successfully Updated");
                }else{
                    console.log("Record Not Present");
                }
            }else{
                console.log(err1);
            }
            client.close();
        })
    }else{
        console.log(err);
    }
    
})