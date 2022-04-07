let mongoose = require("mongoose");
mongoose.pluralize(null);
// define the Schema
// Schema is use to create the structure for the collection.
let customerSchema = mongoose.Schema({
    _id:{type:Number,required:true},
    cname:{type:String,required:true},
    cage:{type:Number,required:true}
});

// using Schema we have to create the model
//1st Parameter Collection name
//2nd Parameter Collection schema defination
let customerModel = mongoose.model("Customer", customerSchema);
//by default mongoose it will crearte the collection in pural & in Lower Case
module.exports=customerModel;