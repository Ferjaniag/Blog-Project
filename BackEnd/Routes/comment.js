const router= require('express').Router()
const commentController=require('../Controllers/commentController') 

router.get('/comment/:id',commentController.ViewComment) ;
router.post('/comment',commentController.createComment) ; 
router.put('/comment/:id',commentController.updateComment) ;
router.delete('/comment/:comment',commentController.deleteComment); 




module.exports=router 