let net = require("net");
let server = net.createServer();
let readline = require("readline");
let obj = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})




server.on("connection",(socket)=>{
    console.log("Client connected successfully")

    socket.on("data",(msg)=>{
        //console.log(msg); // display data in buffer format
        console.log(msg.toString()); 
        
    })
    socket.write("Hello Client, you are connected to chat application Successfully..");

    obj.on("line",(input)=>{
        socket.write(`From Server : ${input}`);
    })
})

server.listen(3000,()=>console.log("Server running on Port 3000"))
