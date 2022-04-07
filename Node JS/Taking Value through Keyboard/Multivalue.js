let obj = require("readline");

let abc = obj.createInterface({
    input:process.stdin, //Standard input device keyword
    output:process.stdout //standard output device console
});

abc.question("Enter the Name : ",(name)=>{
    abc.question("Enter your Age : ",(age)=>{
        console.log("Your Name is "+name);
        console.log("Your Age is "+age);
      
        abc.close(); //terminate our application
    }) 
})