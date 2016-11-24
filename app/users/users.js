var express = require('express');
var router = express.Router();
var userModel = require('./models/users');

var pageData = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.findOne({ 'name': 'Eric Kim'}, function(err, user){
    if(err)console.log(err);
    else{
      if(!user){
        pageData.name  = 'User not found!';
      }
      else{
        pageData.name  = user.name || 'User';
      }
    }
    pageData.title = 'Hello';
    res.render('users', pageData);
  });
});

var myobj = {name:'Eric Kim'};

router.get('/create', function(req, res, next){
  userModel.create(myobj, function(err, doc){
    if(err)console.log(err);
    console.log(doc);
  })
});

module.exports = router;