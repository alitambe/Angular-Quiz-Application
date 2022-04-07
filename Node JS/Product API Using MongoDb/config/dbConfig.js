//Import MongoDb
let mongoClient = require("mongodb").MongoClient;
//Get URL
let url = "mongodb://localhost:27017/"
let dbClient;
exports.connect = ()=>{
    mongoClient.connect(url).then(res=>{
        console.log("Database Connected Successfully...")
        dbClient=res; // Connect Details stored or assign in Variable
    }).catch(err=>{
        console.log(err)
    })
}

exports.getCollection=(name)=>{
    return dbClient.db("meanbatch3").collection(name);
}