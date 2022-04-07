// load the module
let fs = require("fs");

let msg = "Welcome to Node JS FS Module Program";

//fs.writeFile("demo1.txt",msg,(err)=>{
  //  if(!err){
    //    console.log("Data Stored Successfully.");
    //}
//})

fs.writeFile("demo1.txt",msg,{flag:"a+"},(err)=>{
    if(!err){
        console.log("Data Stored Successfully.");
    }
})