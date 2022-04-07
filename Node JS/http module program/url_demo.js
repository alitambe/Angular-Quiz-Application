let urlref = require("url");
let urlmsg = "http://www.google.com:80/hello?name=Ali&age=35";
console.log(urlmsg);
//let urldata = urlref.parse(urlmsg);
let urldata = urlref.parse(urlmsg,true);
console.log(urldata);
let user = urldata.query;
console.log("Name is "+user.name);
console.log("age is "+user.age);