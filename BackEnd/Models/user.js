const mongoose=require('mongoose') 

const userSchema=new mongoose.Schema({
    id: {
        type:Number,
        require:true,
    }, 
    firstName: {
        type:String,
        require:true,
    }, 
    lastName: {
        type:String,
        require:true,
    },
    bio : {
        type:String,
        require:false,
    },
    profile_picture : {
        type:String,
        require:false,
    },

    email : {
        type:String,
        require:true,
        unique: true,
    }, 
    password: {
          type:String,
        require:true,
    }
})



module.exports=mongoose.model('User',userSchema)