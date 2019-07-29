var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('msg', {
    res: 'fffff',
    contents: [
        {"name":"ted","msg":"감사요"},
        {"name":"jean","msg":"최고에요~"},
        {"name":"star","msg":"감사합니다."},
        {"name":"ted","msg":"목소리가 좋아요"}
    ]
  });
});







module.exports = router;
