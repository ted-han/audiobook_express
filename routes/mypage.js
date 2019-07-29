var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  

  res.render('mypage', {
    res: 'fffff',
    contents: ['도깨비방망이','토끼와거북이','잭과콩나무']
  });
});







module.exports = router;
