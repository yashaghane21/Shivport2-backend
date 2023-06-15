
const mongoose=require("mongoose");

const Userschema= new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const usermodel = mongoose.model('client',Userschema);
module.exports=usermodel;