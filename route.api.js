var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/* GET users list */
router.get('/users',function(req,res){
    res.send('respond with a resource');
})

/* GET posts list */
router.get('/posts',function(req,res){
    // res.json({postsList:['artcle1','artcle2','artcle3']});
    PostModel.find({},{},function(err,posts){
        if(err){
            res.json({success:false});
            return;
        }

        res.json({success:true,postsList: posts});
    })
})

/* POST posts */
router.post('/posts',function(req,res,next){
    let title = req.body.title;
    let content = req.body.content;
    // res.send({title:title,content:content});
    var post = new PostModel();
    post.title = title ;
    post.content = content;
    post.save((err,doc)=>{res.send(' you have just save the post , congratuation ! ')});
})

/* DELETE post */
router.delete('/posts/:id',function(req,res,next){
    PostModel.findOne({_id:postId},function(err,doc){
        if (err){
            res.json({success:false});
        }
        res.json({success:true,postsList: posts});
    })
})






module.exports = router;