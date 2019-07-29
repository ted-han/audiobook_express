var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  let result = {}


  res.render('contents', { "res": result });
});


router.post('/', function(req, res) {

  // let audioname = new Date().toISOString();

  console.log('post contents')
  console.log(req.body)
  // console.log(JSON.stringify(req.body))

  // fs.appendFile(`../savefiles/${audioname}.wav`, req.body, function (err) {
  //   fs.appendFile(`public/savefiles/test3.wav`, req.body, function (err) {
  //     if (err) throw err;
  //     console.log('Saved!');
  // });

  res.send('send');
});






module.exports = router;
