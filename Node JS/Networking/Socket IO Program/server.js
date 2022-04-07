let express = require("express");
let app = express();
// loading http module and calling server function and passing reference of express
let http = require("http").createServer(app);
// creating the reference of socket.IO and passing http reference using IIFE style.
let io = require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
// this below function execute if any client send request to this application using socket library
io.on("connection",(socket)=>{
    console.log("Client Connected...")
    // to receive message from client application
    socket.on("obj",(msg)=>{
        console.log(msg);
        socket.emit("obj1","Server "+msg);
    })
})

http.listen(3000,()=>console.log("Server running on port no 3000"))