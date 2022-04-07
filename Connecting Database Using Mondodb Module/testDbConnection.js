// Load the module and create the reference
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch3";

mongoClient.connect(url,(err,client)=>{
    if (!err){
        console.log("Database successfully connected");
        let db = client.db(myDb);
    }else{
        console.log(err);
    }
})