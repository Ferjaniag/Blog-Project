const User=require('../Models/user')
const router= require('express').Router() 
const bcrypt=require('bcrypt')
const userController=require('../Controllers/userController')


const multer=require('multer') ; 
let filename=''

const myStorage=multer.diskStorage({
    destination:'./uploads',
    filename :(req,file,redirect)=> {
        let date=Date.now() ;
        let fl=date+'.'+file.mimetype.split('/')[1] ;
        redirect(null,fl) ;
        filename=fl ;
    }
})

const upload=multer({storage:myStorage}) 


router.post('/register',upload.any('image'),(req,res)=> {
    console.log(" body : ",req.body)
   
      const newUser=new User() 
     
    newUser.firstName=req.body.firstName ;
    newUser.lastName=req.body.lastName ; 
    newUser.email=req.body.email;

    // crypter password 
    salt=bcrypt.genSaltSync(10) ;
  
    newUser.password=bcrypt.hashSync(req.body.password,salt) ;
    newUser.bio=req.body.bio;
    newUser.profile_picture=filename;
       newUser.save().then(
      res.status(201).send({sucess:"true",message:"Account successfully created!"}) ) .catch(
      res.status(500).send({sucess:"false",message:error.message})  )
  
      })


router.post('/signIn',userController.signIn)



module.exports=router 

