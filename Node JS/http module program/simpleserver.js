let http = require("http");

let server = http.createServer((req,res)=>{
    res.end("Welcome to Simple HTTP module");
})

server.listen(9090,"localhost",()=>console.log("Server running on Port 9090"));