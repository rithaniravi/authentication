const mongoose=require("mongoose");
const LoginSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    confirmpassword:String,
    
})
const LoginModel=mongoose.model("Login",LoginSchema);
module.exports=LoginModel;