var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var file = require("file.js");  //此时，route.js与file.js处于同个目录下

app.post('/fileupload', file.upload);
app.get('/download/:id', file.download);  //结合表单页面的<a>标签，里面的kkk是指该文件的id

module.exports = router;
