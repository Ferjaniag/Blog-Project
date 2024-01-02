const Tweet=require('../Models/tweet') 

const Comment=require('../Models/comment')



// Add Tweet
const addTweet=((req,res)=>{


 console.log(" body : ",req.body)
  const newTweet=new Tweet(req.body)
  newTweet.save().then(result => {

    res.status(201).send({sucess:"true",message:"Tweet successfully published",newtweet:result})

  }).catch(error=>{
res.status(500).send({sucess:"false",message:"Error"})
  })
})












// Add comment to tweet 

const addComment = (async (req,res)=>{

    const idComment =''

    // create comment 
    const newComment=new Comment()
    
    newComment.idUser=req.body.idUser 
    newComment.contentComment=req.body.contentComment
     newComment.save().then(result =>
         idComment=result._id )

    // update tweet by adding idComment 
    await Tweet.findByIdAndUpdate(
        req.body.idTweet,
        {
          $push: { comments: idComment },
          $inc: { commentsCount: 1 },
        },
        { new: true } // Return the updated document
      ).then(  res.status(201).send({sucess:"true",message:"Comment successfully added!"}) ) .catch(
 
        res.status(500).send({sucess:"false",message:error.message})  );


})


// Update tweet 

const updateTweet = (async (req,res)=>{

  await  Tweet.findOneAndUpdate({ id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(result => res.status(200).json({ success:"true",message:"Successfully updated!" }))
    .catch((error) => res.status(404).json({msg: 'Tweet not found' }))


})



// Delete tweet 

const deleteTweet = (async (req,res)=>{

   await Tweet.deleteOne({id:req.params.id}).then(res.status(200).send({sucess:"true",message:"Tweet deleted"}) )
    .catch(res.status(500).send({sucess:"false",message:'Not Found'}))
    
})

const getAllTweetes = (async (req,res)=>{

  try {
    const result = await Tweet.find();
    res.status(200).send({ success: true, Tweets: result });
  } catch (error) {
    res.status(500).send({sucess:"false",message:error})
  }
 
 /*
  await Tweet.find().then(result=> {
    res.status(200).send({sucess:"true",Tweets:result})
  }) .catch(res.status(500).send({sucess:"false",message:"No tweets were found. "}) ) 
}) 
*/

})


module.exports = {deleteTweet,addComment,updateTweet,addTweet,getAllTweetes}
