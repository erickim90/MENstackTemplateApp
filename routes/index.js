var express = require('express');
var router = express.Router();

var pageData = {};

router.get('/', function(req, res) {
  res.render('main', pageData);
});

//TODO add PASSPORT/OAUTH or some security tool for secure Log In
// router.get('/login', function(req, res) {
// });
// router.post('/login', function(req, res) {
// });
// router.get('/logout', function(req, res) {
// });
module.exports = router;