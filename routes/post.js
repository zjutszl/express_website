var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'My Blog' ,postsList:['文章1','文章2','文章3']});
});

router.get('/list',(req,res) => {
    res.json({postsList:['文章1','文章2','文章3']})
})

module.exports = router;
