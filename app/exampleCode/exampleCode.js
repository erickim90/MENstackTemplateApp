/**
 * Created by kobe on 11/27/2016.
 */
var express = require('express');
var router = express.Router();

var pageData = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
  pageData.title = "Example Code";
  res.render('exampleCode', pageData);
});

module.exports = router;