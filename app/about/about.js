/**
 * Created by kobe on 11/27/2016.
 */
var express = require('express');
var router = express.Router();

var pageData = {};

router.get('/', function(req, res, next) {
    pageData.title = "About";
    res.render('about', pageData);
});

module.exports = router;