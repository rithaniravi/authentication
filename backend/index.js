const express=require("express")
const cors=require("cors")
const dotenv=require('dotenv')
const path=require('path')
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")
const app=express()

dotenv.config({path:path.join(__dirname,"config",'config.env')})
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}

))
const mongoose=require("mongoose")
const LoginModel=require("./schema")
mongoose.connect("mongodb+srv://rithaniravi:Rithani2095@clusterbackend.rpda541.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBackEnd")
      .then(()=>console.log("DB is connected"))
      .catch((err)=>{
        console.log("DB is not connected")
      })

app.post("/signin",(req,res)=>{
    LoginModel.create(req.body)
    .then((login)=>res.json(login))
    .catch((err)=>
       console.log(err)
    );
})
app.post('/login',(req,res)=>{
  const{email,password}=req.body
  LoginModel.findOne({email})
  .then(login=>{  
      if(login.password === password){
        const accessToken= jwt.sign({email:email},
          "jwt-assess-token-secret-key",{expiresIn:"10m"})
        const refreshToken= jwt.sign({email:email},
            "jwt-refresh-token-secret-key",{expiresIn:"20m"})
        res.cookie("accessToken", accessToken,{maxAge:60000})
        res.cookie("refreshToken", refreshToken,
          {maxAge:300000,httpOnly:true,secure:true,sameSite:"strict"})
        return res.json({Login:true})  
      }
      else{
        res.json({Login: false, message: "no record"})
      }
  }).catch(err=>res.json(err))
})
const varifyUser= (req,res,next)=>{
  const accesstoken = req.cookies.accessToken;
  if (!accesstoken){
    if (renewToken(req,res)){
      next()
    }


  }else{ 
    jwt.verify(accesstoken,'jwt-assess-token-secret-key', (err,decoded)=>{
      if(err){
        return res.json({valid:false, message:"Invalid Token"})
      } else{
        req.email=decoded.email
        next()
      }
    })

  }
}
const renewToken = (req,res)=>{
  
  const refreshtoken = req.cookies.refreshToken;
  let exist = false;
  if (!refreshtoken){
    return res.json({valid:false, message:"No refresh token"})
  }else{ 
    jwt.verify(refreshtoken,'jwt-refresh-token-secret-key', (err,decoded)=>{
      if(err){
        return res.json({valid:false, message:"Invalid refresh Token"})
      } else{
        const accessToken= jwt.sign({email:decoded.email},
          "jwt-assess-token-secret-key",{expiresIn:"1m"})
        res.cookie("accessToken", accessToken,{maxAge:60000})
        exist = true;
        
      }
    })

  }
  return exist;

}
app.get('/dashboard',varifyUser, (req,res)=>{
   return res.json({valid:true, message:"authorized"})
})
app.get('/data',(req,res)=>{
  
         LoginModel.find()
        .then((login)=>res.json(login))
        .catch((err)=>console.log(err))
      })
  




app.listen(process.env.PORT,()=>{
    console.log("server connected")
})

