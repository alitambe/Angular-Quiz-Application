// Load the module and create the reference
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch3";

mongoClient.connect(url,(err,client)=>{
    if (!err){
        console.log("Database successfully connected");
        let db = client.db(myDb);
        //let cursor = db.collection("Employee").find({}); All
        let cursor = db.collection("Employee").find({});
        cursor.forEach(e=>{
            //console.log("Name "+e.name+" age "+e.age);
            console.log(e);
            client.close();
        })
    }else{
        console.log(err);
    }
    
})