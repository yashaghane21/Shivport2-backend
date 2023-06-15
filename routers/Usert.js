const express=require("express");
const router =express.Router();
const bcrypt=require("bcrypt");
const aboutmodel=require("../models/About")

const usermodel = require("../models/User");




router.post('/signup',async(req,res)=>{
   try{
    const {Username,password}=req.body;
    const hashedpassword = await bcrypt.hash(password,10);
    const user=new usermodel({Username,password:hashedpassword});
    user.save();
    return res.send({
     success:true,message:"succsefully create"
    });
   }
   catch(error){
    console.log(error);
   }
 
});


router.post('/login', async (req, res) => {
    try {
      const { Username, password } = req.body;
      //validation
      if (!Username || !password) {
        return res.status(401).send({
          success: false,
          message: "Please provide email or password",
        });
      }
      const user = await usermodel.findOne({ Username });
      if (!user) {
        return res.status(200).send({
          success: false,
          message: "email is not registerd",
        });
      }
      //password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send({
          success: false,
          message: "Invlid username or password",
        });
      }
      return res.status(200).send({
        success: true,
        messgae: "login successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error In Login Callcback",
        error,
      });
    }
  }
);





router.post('/about',async(req,res)=>{                     // contact form for user to sumbit 
      const{name,email,phone,message}=req.body

    
        const about=  new aboutmodel({name,email,phone,message});
        about.save();
        res.status(200).send({
          message:"succesfuly send",
          success:true,
          about
        })
      }
)




 //get all info of contacters

 router.get("/messages",async(_req,res)=>{

  try {
    const ele= await aboutmodel.find({})
    return res.status(200).send({
      message:"done",
      success:true,
      ele
    
    })
  } catch (error) {
    console.log(error)
  }
 
 })
  
  
  
  
  

 module.exports=router
