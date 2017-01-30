var express = require('express');
var router = express.Router();

var pageData = {};

router.get('/', function(req, res) {
  pageData.fruit = ['apples','oranges','berries'];
  res.render('main', pageData);
});

module.exports = router;
