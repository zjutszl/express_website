var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Blog' ,postsList:['文章1','文章2','文章3']});
});

module.exports = router;
