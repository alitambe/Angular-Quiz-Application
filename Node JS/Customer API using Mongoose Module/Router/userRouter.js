let express = require("express");
let router = express.Router();
let userController = require("../Controller/userController");

router.post("/register",userController.userRegistration);
router.post("/signIn",userController.signIn);

module.exports=router;