let express = require("express");
let router = express.Router();
let customerController = require("../Controller/customerController");
let auth = require ("../middleware/auth");
//router.post("/storeCustomerInfo",customerController.storeCustomerInfo);
//router.put("/updateCustomerAge",customerController.updateCustomerAge);
//router.delete("/deleteCustomerInfo/:_id",customerController.deleteCustomerInfo);
//router.get("/getAllCustomer",customerController.getAllCustomer);

// Normal User can do only once operation
router.get("/getAllCustomer", auth.verifyToken, auth.isUser, customerController.getAllCustomer);

// Admin User can do only once operation
router.get("/getAllCustomer", auth.verifyToken, auth.isAdmin, customerController.getAllCustomer);
router.post("/storeCustomerInfo", auth.verifyToken, auth.isAdmin, customerController.storeCustomerInfo);

module.exports=router;