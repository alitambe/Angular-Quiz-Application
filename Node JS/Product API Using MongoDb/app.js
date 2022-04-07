let express =require("express");
let dbConnection = require("./config/dbConfig");
let productRouter = require("./router/productRouter");
let app = express();
dbConnection.connect(); //Connect the database
//middleware

//http://localhost:9090/api/product
//http://localhost:9090/api/product/findproduct
app.use(express.json());
//http://localhost:9090/api/product
app.use("/api/product",productRouter); //to enable Json data from body part

app.listen(9090,()=>console.log("Server running on port number 9090"));