let userModel = require("../Model/userModel");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

let signUpUser = async(user)=>{
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(user.password, salt);
    let userRef = new userModel({
        email : user.email,
        password:hashPassword,
        name:user.name,
        user_type:user.user_type
    })
    return userModel.insertMany(userRef);
}

let signIn = async(user)=>{
    //Check Email Id
    let result=await userModel.findOne({email:user.email});
    if (result==null){
        return "Email Id does not exist"
    }
    //Check the password
    let validPassword = await bcrypt.compare(user.password,result.password);
    if (!validPassword){
        return "Invalid Password";
    }
    // generate the Token using payload data
    let payload = {id:result._id,email:user.email,user_type:result.user_type};
    let token = await jwt.sign(payload,"my-key");
    return token;
}

module.exports={signUpUser, signIn};