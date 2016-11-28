var express = require('express');
var router = express.Router();

var pageData = {};

/* GET home page. */
router.get('/', function(req, res) {
  pageData.title = "Login";
  res.render('index', pageData);
});

router.post('/login', function(req, res) {
  console.log(req.body);
  res.render('main', pageData);
});

router.get('/main', function(req, res) {
  res.render('main', pageData);
});

router.get('/logout', function(req, res) {
  res.render('login', pageData);
});

module.exports = router;
