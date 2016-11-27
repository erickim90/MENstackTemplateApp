var express = require('express');
var router = express.Router();

var pageData = {};

/* GET home page. */
router.get('/', function(req, res) {
  pageData.title = "Main Page";
  pageData.layout = "navLayout";

  res.render('index', pageData);
});

router.get('/login', function(req, res) {
  pageData.title = "Login";
  pageData.layout = "navLayout";

  res.render('login', pageData);
});

router.get('/logout', function(req, res) {
  pageData.title = "Logout";
  pageData.layout = "layout";
  res.render('login', pageData);
});

module.exports = router;
