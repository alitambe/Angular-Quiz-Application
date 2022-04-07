let userRepository = require("../Repository/userRepository");

let userRegistration = async (req,res)=>{
    let user = req.body;
    try{
        let result = await userRepository.signUpUser(user);
        res.send(result);
    }catch(Ex){
        res.send(Ex);
    }
}

let signIn = async(req,res)=>{
    let user = req.body;
    try{
        let result = await userRepository.signIn(user);
        //res.send(result);
        res.send({"token":result})
    }catch(Ex){
        res.send(Ex);
    }
}
module.exports={userRegistration,signIn}