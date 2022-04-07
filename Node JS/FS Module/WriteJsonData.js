let fs = require("fs");
let customer = {cid:1,cname:"Ali Tambe",age:35};

fs.writeFileSync("customer.json",JSON.stringify(customer),flag:"+a");
console.log("Customer Record Successfully");