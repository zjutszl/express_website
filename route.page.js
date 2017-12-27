var marked = require('marked');
var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/* GET home page */
router.get("/",function(req,res,next){
    res.render('index',{title:"webapp",postsList:['文章1','文章2','文章3']});
})

/* GET posts page */
router.get('/posts',function(req,res,next){
    res.render('posts',{title:"posts"});
})

/* GET posts create page. */
router.get('/posts/create',function(req,res,next){
    res.render('creat');
})

/* GET post show page */
router.get('/posts/show',function(req,res,next){
    var id = req.query.id;

    PostModel.findOne({_id:id},function(err,post){
        post.content = marked(post.content);
        res.render('show',{post});
    })
})

/* GET edit page */
router.get('/post/edit/:id',function(req,res,next){
    let id = req.params.id;
    res.render('edit',{id});
})




module.exports = router;