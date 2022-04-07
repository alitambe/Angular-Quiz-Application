let express = require("express");

let app = express();
//create the reference of websocket with help of express with in IIFE Style.
let ws = require("express-ws")(app);

// first we will open the static web page
// http://localhost:9090/
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
// server want to receive web socket request from client
app.ws("/",(socket,req)=>{
    console.log("Client connected Successfully");

    // this code is use to receive message from browser ws client
    socket.on("message",(msg)=>{
        console.log(msg);
        socket.send("Welcome Mr. "+msg);
    })
    // server send the message to client application
    socket.send("Hello Client, Welcome to Web Socket");
})


app.listen(9090,()=>console.log("Server Connected to Port 9090"));