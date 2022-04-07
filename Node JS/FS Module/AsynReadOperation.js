let fs = require("fs");
fs.readFile("demo1.txt",(err,data)=>{
    if (!err){
        let info = data.toString();
        console.log(info);
    }
})