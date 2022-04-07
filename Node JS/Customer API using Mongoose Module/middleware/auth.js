let jwt = require("jsonwebtoken");

let verifyToken = async(req,res,next)=>{
    let token = req.headers.authorization;
    if (!token){
        return res.send("UnAthorized User")
    }

    try{
        let verifyTokenValue = await jwt.verify(token,"my-key");
        if (!verifyTokenValue){
            res.send ("Unauthorised User !!")
        }
        req.role = verifyTokenValue;
        next(); //If Valid token is present go to next step
        
    }catch(Ex){
        res.send(Ex);
    }
}

let isUser = async(req,res,next)=>{
    if(req.role.user_type=="user"){
        console.log("Normal User")
        next();
    }else{
        res.send("Unauthorise User, you can't access this resource")
    }
}

let isAdmin = async(req,res,next)=>{
    if(req.role.user_type=="admin"){
        console.log("Admin User")
        next();
    }else{
        res.send("Unauthorise User, you can't access this resource")
    }
}

module.exports={verifyToken,isAdmin,isUser}