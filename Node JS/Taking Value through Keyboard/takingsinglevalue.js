let obj = require("readline");

let abc = obj.createInterface({
    input:process.stdin, //Standard input device keyword
    output:process.stdout //standard output device console
});

abc.question("Enter the Name : ",(name)=>{
    console.log("Your Name is "+name);

    abc.close(); //terminate our application
})