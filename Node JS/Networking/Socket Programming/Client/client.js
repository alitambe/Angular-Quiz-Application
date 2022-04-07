let net = require("net");
let readline = require("readline");
let obj = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let client = net.createConnection(3000,"localhost",()=>{

    // this code is use to send the data to the server
    client.write("Hello Server, i am Client...");
})

    // this code is use to receive the message from server
client.on("data",(msg)=>{
    console.log(msg.toString());
})

obj.on("line",(input)=>{
    client.write(`From Client : ${input}`);
})