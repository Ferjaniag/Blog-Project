const router= require('express').Router()

const Tweet=require('../Models/tweet') 
const TweetController=require('../Controllers/tweetController')

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

router.post('/tweet/create',upload.any('tweetAttachement'),(req,res)=>{

    const newTweet= new Tweet() ;

    newTweet.userID=req.body.userID;
    newTweet.tweetContent=req.body.tweetContent ;
    newTweet.tags=req.body.tags
    newTweet.tweetAttachment=filename ;

    newTweet.save().then(
        res.status(201).send({sucess:"true",message:"Tweet successfully created!"}) ) .catch(
   
        res.status(500).send({sucess:"false",message:error.message})  )
    

})

router.post('/tweet/addTweetNF',TweetController.addTweet) ;
router.get('/tweet/getAllTweets',TweetController.getAllTweetes);
router.delete('/tweet/delete/:id',TweetController.deleteTweet)
router.put('/tweet/updateTweet/:id',TweetController.updateTweet)
router.get('/tweet/tweets/:idUser',TweetController.getTweetsByIDUser)


module.exports=router 