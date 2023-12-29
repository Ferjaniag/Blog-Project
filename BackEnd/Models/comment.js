const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    idUser : {
        type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          require:true,
    }, 
    dateComment: {
        type: Date,
        default: Date.now,
      },
    commentContent :{
       type:String,
       require:true
    }
})


module.exports=mongoose.model('Comment',commentSchema)

