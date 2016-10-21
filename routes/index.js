var express = require('express');
var router = express.Router();
var fs = require('fs');

  /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/search', function(req, res, next) {
  var name = req.param('name');
  var isExist = fs.existsSync("/test.txt");;
  
  res.render('result', { isExist: isExist, name: name, title: '查询结果' });
});

module.exports = router;
