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

  // console.log('post contents')
  // console.log(req.body)
  // console.log(JSON.stringify(req.body))

  // fs.appendFile(`../savefiles/${audioname}.wav`, req.body, function (err) {
  //   fs.appendFile(`public/savefiles/test3.wav`, req.body, function (err) {
  //     if (err) throw err;
  //     console.log('Saved!');
  // });

  let userid = req.session.userid;
  let userdata = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  let nowcnt = userdata.userinfo[userid]["cnt"];
  userdata.userinfo[userid]["cnt"]= parseInt(nowcnt)+1;
  fs.writeFileSync('public/savefiles/user.json', JSON.stringify(userdata));

  // res.send('send');
  res.redirect('/mypage');
});






module.exports = router;
