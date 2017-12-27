var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/* GET users list */
router.get('/users', function (req, res) {
    res.send('respond with a resource');
})

/* GET posts list */
router.get('/posts', function (req, res) {
    // res.json({postsList:['artcle1','artcle2','artcle3']});
    PostModel.find({}, {}, function (err, posts) {
        if (err) {
            err.status = 500;
            next(err);
        }

        res.json({ postsList: posts });
    })
})

/* POST posts */
router.post('/posts', function (req, res, next) {
    let title = req.body.title;
    let content = req.body.content;
    // res.send({title:title,content:content});
    var post = new PostModel();
    post.title = title;
    post.content = content;
    post.save(function(err,post){
        if(err) {next(err);}
        res.json({post});
    });
})

// /* DELETE post */
// router.delete('/posts/:id', function (req, res, next) {
//     PostModel.findOne({ _id: postId }, function (err, doc) {
//         if (err) {
//             res.json({ success: false });
//         }
//         res.json({ success: true, postsList: posts });
//     })
// })

/* GET single one post */
router.get('/post/:id', function (req, res, next) {
    let id = req.params.id;

    PostModel.findOne({ _id: id }, function (err, post) {
        if (err) {
            err.status = 500;
            next(err);
        };

        res.json({ post });
    })
})

/* PATCH single one post */
router.patch('/post/:id', function (req, res, next) {
    var id = req.params.id;
    var title = req.body.title;
    var content = req.body.content;

    PostModel.findOneAndUpdate({ _id: id }, { title, content }, function (err) {
        if (err) {
            err.status = 500;
            next(err);
        }

        res.json({});
    })
})


module.exports = router;