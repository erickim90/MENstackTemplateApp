/**
 * Created by kobe on 11/27/2016.
 */
/**
 * Created by kobe on 11/27/2016.
 */
var express = require('express');
var router = express.Router();

var pageData = {};

router.get('/', function(req, res, next) {
    pageData.title = "Resume";
    pageData.updated = "Updated November 17th 2016";
    res.render('resume', pageData);
});

module.exports = router;