var express = require('express');
var router = express.Router();
var fs = require('fs');



router.post('/', function(req, res) {

  let audioname = new Date().toISOString();

  console.log(req.body)
  // console.log(JSON.stringify(req.body))
  
  // console.log(encodeURIComponent(req.body))
  
  console.log('hi')
  // fs.appendFile(`../savefiles/${audioname}.wav`, req.body, function (err) {
    fs.appendFile(`public/savefiles/test3.wav`, req.body, function (err) {
      if (err) throw err;
      console.log('Saved!');
  });

  res.send('htkk');
});






module.exports = router;
