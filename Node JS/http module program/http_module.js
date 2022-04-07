let http = require("http");
const path = require("path/posix");
let url = require("url");
let loginPage = `
                <html>
                <head>
                </head>
                <body>
                <form action="checkuser">
                <label>UserName</label>
                <input type="text" name="user"/><br/>
                <label>Password</label>
                <input type="password" name="pass"/><br/>
                <input type="submit"/>
                <input type="reset"/>
                </form>
                </body>
                </html>
`
let indexpage =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Welcome to My Simple Web Page</h2>
    <a href="aboutus">About Us</a> |
    <a href="contactus">Contact Us</a> |
    <a href="login">Login Page</a> |
</body>
</html>`
let server = http.createServer((req,res)=>{
    let pathInfo = url.parse(req.url,true);
    //console.log(pathinfo.pathname);
    //console.log("Client Sent Request");
    res.setHeader("content-type","text/html");
    if(pathInfo.pathname != "/favicon.ico"){

        if(pathInfo.path=="/"){
            res.write(indexpage);
        }
        if(pathInfo.pathname=="/contactus"){
            res.write("<h2>Welcome to Contact Us Page</h2>")
            res.write("Welcome Again")
        }
        if(pathInfo.pathname=="/aboutus"){
            res.write("Welcome to About Us Page")
            res.write("Welcome Again")
        }
        if(pathInfo.pathname=="/login"){
           // res.write("Welcome to Login Page")
            res.write(loginPage)
        }
        if(pathInfo.pathname=="/checkuser"){
            let login = pathInfo.query;
            if(login.user=="Ali" && login.pass=="123"){
                res.write("Successfully Login");
            }else{
                res.write("Login Failed, Please retry");
            }
        }
    }
    res.end();
})
server.listen(9090,()=>console.log("Server is Up"));