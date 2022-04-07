// Load the module and create the reference
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch3";

mongoClient.connect(url,(err,client)=>{
    if (!err){
        console.log("Database successfully connected");
        let db = client.db(myDb);
        db.collection("Employee").deleteOne({_id:2},(err1,res)=>{
            if (!err){
                if (res.deletedCount > 0) {
                    console.log("Record Successfully Deleted");
                }else{
                    console.log("Record Not Present");
                }
                client.close();
            }else{
                console.log(err1);
            }
        })
    }else{
        console.log(err);
    }
    
})