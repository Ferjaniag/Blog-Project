
const Comment=require('../Models/comment')

// Create Comment 

const createComment= ((req,res)=> {
    console.log(" body : ",req.body)
   
      const newComment=new Comment()
    
      newComment.idUser=req.body.idUser 
      newComment.contentComment=req.body.contentComment
       newComment.save().then(
      res.status(201).send({sucess:"true",message:"Comment successfully added!"}) ) .catch(
 
      res.status(500).send({sucess:"false",message:error.message})  )
  
  
  
      })



// View Comment 

const ViewComment=((req,res)=>{

    Comment.findOne({id:req.params.id}).
    then( comment=> res.status(200).send({sucess:"true",message:comment}) )
    .catch( res.status(500).send({sucess:"false",message:'Not Found'})) 
}) 


// Delete Comment 

const deleteComment = ((req,res)=>{
    Comment.deleteOne({id:req.params.id}).then(res.status(200).send({sucess:"true",message:"comment deleted"}) )
    .catch(res.status(500).send({sucess:"false",message:'Not Found'}))
})



// Update Comment 

const updateComment= ((req,res)=>{

    Comment.findOneAndUpdate({ id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ success:"true",message:"Successfully updated!" }))
        .catch((error) => res.status(404).json({msg: 'Comment not found' }))
})



module.exports= {createComment,updateComment,deleteComment,ViewComment}
