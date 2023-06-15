const mongoose=require("mongoose");

const aboutmodel= new mongoose.Schema
({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    message:{
        type:String
    }
})

const aboutm= mongoose.model("message",aboutmodel);
module.exports= aboutm 