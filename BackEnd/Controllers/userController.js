const User=require("../Models/user")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')



// Create new user
const createUser= ((req,res)=> {
    console.log(" body : ",req.body)
   
      const newUser=new User() 
     
    newUser.firstName=req.body.firstName ;
    newUser.lastName=req.body.lastName ; 
    newUser.email=req.body.email;

    // crypter password 
    salt=bcrypt.genSaltSync(10) ;
  
    newUser.password=bcrypt.hashSync(req.body.password,salt) ;
    newUser.bio=req.bdoy.bio;
    newUser.profile_picture=req.body.profile_picture;
       newUser.save().then(
      res.status(201).send({sucess:"true",message:"Account successfully created!"}) ) .catch(
      res.status(500).send({sucess:"false",message:error.message})  )
  
      })

 
// Sign In 

const signIn = ((req,res)=> {

  console.log(" body : ",req.body)

User.findOne({email:req.body.email}).
then(user => {
 
  let valid=bcrypt.compareSync(req.body.password,user.password) ; 

  if (!valid) {
    res.send({message:"Email or password Invalid!"})
  } else {

    let payload= {
      _id:req.body._id ,
      email:req.body.email,
      bio:req.body.bio,
      profile_picture:req.body.profile_picture,
      fullName:req.body.firstName+' '+req.body.lastName

    }

    let token=jwt.sign(payload,'secretKey') 
    res.status(201).send({sucess:"true",token:token}) 

  }

})
.catch( error =>  res.status(500).send({sucess:"false",message:error.message})


)

})



// Update profil
const updateUserProfil = ((req, res) => {
    User.findOneAndUpdate({ email: req.params.email }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ success:"true",message:"Successfully updated!" }))
        .catch((error) => res.status(404).json({msg: 'User not found' }))
})







module.exports={createUser,updateUserProfil,signIn}