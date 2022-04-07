let express = require("express");
const res = require("express/lib/response");
let app = express();
let emp = {id:100,name:"Ali",age:21};

//add Middleware

app.use(express.json()); //enable post json data from http request

/// GET METHOD EXAMPLES :
let employee = [
    {id:1,name:"Ali",age:35},
    {id:2,name:"Aisha",age:21},
    {id:3,name:"Nagma",age:28}
]
//http://Localhost:9090/sayHello
// get the output in plain text format.
app.get("/sayHello",(req,res)=>{
    res.send("Welcome to Simple REST API")
})
//http://Localhost:9090/sayJson
app.get("/sayJson",(req,res)=>{
    res.json({"msg":"Welcome to Simple Json Message"});
})
//http://Localhost:9090/empInfo
app.get("/empInfo",(req,res)=>{
    res.json(emp);  //Automatically convert JS Object in to JSON
})

//http://Localhost:9090/AllEmployees
app.get("/AllEmployees",(req,res)=>{
    res.json(employee);
})

//http://Localhost:9090/singleQueryParam?name=Ali
app.get("/singleQueryParam",(req,res)=>{
    let name = req.query["name"];
    res.send("Welcome User "+name);
})

//http://Localhost:9090/multipleQueryParam?name=Ali&pass=123
app.get("/multipleQueryParam",(req,res)=>{
    let name = req.query["name"];
    let pass = req.query["pass"];
    //res.send("Welcome User "+name);
    if (name=="Ali" && pass=="123"){
        res.send("Successfully Login")
    }else{
        res.send("Login Failure")
    }
})
//http://Localhost:9090/singlePathParam/Ali
app.get("/singlePathParam/:user",(req,res)=>{
    let user = req.params.user;
    res.send("Welcome user to path Param "+user);
})
//http://Localhost:9090/multiPathParam/Ali/123
app.get("/multiPathParam/:user/:pass",(req,res)=>{
    let user = req.params.user;
    let pass = req.params.pass;
    if (user=="Ali" && pass=="123"){
        res.send("Successfully Login with Path Param")
    }else{
        res.send("Login Failure with Path Param")
    }
})

// POST METHOD EXAMPLES
//http://Localhost:9090/storeEmployee
app.post("/storeEmployee",(req,res)=>{
    let emp = req.body;
    console.log(emp);
    res.send("Data Stored");
})


//http://Localhost:9090/updateEmployeeSalary
app.patch("/updateEmployeeSalary",(req,res)=>{
    let emp = req.body;
    console.log(emp);
    res.send("Employee Salary Updated");
})

//http://Localhost:9090/updateEmployeeDetails
app.put("/updateEmployeeDetails",(req,res)=>{
    let emp = req.body;
    console.log(emp);
    res.send("Employee Details Updated Successfully");
})

//http://Localhost:9090/deleteEmployeeInfo/100
app.delete("/deleteEmployeeInfo/:id",(req,res)=>{
    let id = req.params.id;
    res.send("Record Successfully Deleted for Id:" +id);
})

app.listen(9090,()=>console.log("Server running on Port No 9090"));