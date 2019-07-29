var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  let username = req.session.username;

  let result = {
    "username": username,
    "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
    "contents": [
      {"name":"ted","msg":"감사요"},
      {"name":"jean","msg":"최고에요~"},
      {"name":"star","msg":"감사합니다."},
      {"name":"ted","msg":"목소리가 좋아요"}
    ]
  }

  res.render('mypage', { "res": result });
});







module.exports = router;
