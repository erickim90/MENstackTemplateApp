var express = require('express');
var router = express.Router();

var pageData = {};

router.get('/', function(req, res) {
  res.render('main', pageData);
});

module.exports = router;