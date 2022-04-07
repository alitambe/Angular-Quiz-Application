let obj = require("readline-sync");
let id = obj.questionInt("Pls Enter id : ")
let name = obj.question("Plz enter your name : ");
let Salary = obj.questionFloat("Plz enter your Salary : ");
console.log("Your Id is "+id);
console.log("Your Name is "+name);
console.log("Your Salary is "+Salary);
