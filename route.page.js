var express = require('express');
var router = express.Router();

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

module.exports = router;