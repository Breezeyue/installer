var express = require('express');
var router = express.Router();
var shell = require('shelljs');
var fs = require('fs');
var configFile = __dirname + '/../config/demo.txt'
// http://www.expressjs.com.cn/4x/api.html

/* GET home page. */
router.get('/', function(req, res, next) {
  var params = req.query
  console.log(params['nihao'])

  // 读取文件: https://nodejs.org/api/fs.html
  // fs.appendFile(configFile, '7,8,9,10', function (err) {
  // 	if (err) throw err;
  //	 console.log('It\'s saved!');
  //  });
  // fs.readFile(configFile, 'utf8', function(err, data){
  //   console.log(data);  
  // });
  // 执行shell脚本路径: https://www.npmjs.com/package/shelljs
  var shellres = shell.ls('.');

  res.render('index', { title: shellres });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

/* GET test page. */
router.get('/test', function(req, res, next) {
  res.render('test');
});

/* GET agreement page. */
router.get('/agreement', function(req, res, next) {
  res.render('agreement');
});

/* GET main page. */
router.get('/main', function(req, res, next) {
  res.render('main', { layout: 'main'});
});

module.exports = router;


