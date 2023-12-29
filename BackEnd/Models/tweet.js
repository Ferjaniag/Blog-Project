const mongoose=require('mongoose')  


const tagSchema=new mongoose.Schema({

  id: {
  type: Number,
  required: false,
  } , 
  tagName : {
      type: String,
      required: true,
  }
})

const tweetSchema=new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
     
      tweetContent: {
        type: String,
        required: true,
      },
      tweetAttachment : {
        type: String,
        required: false,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
      likesCount: {
        type: Number,
        default: 0,
      },
      commentsCount : {
        type: Number,
        default: 0,
      } , 
      tags : [{
        type: String,
        required: true,
      }
      ],
})


module.exports=mongoose.model('Tweet',tweetSchema)
