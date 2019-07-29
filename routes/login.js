var express = require('express');
var router = express.Router();
var fs = require('fs');



router.get('/', function(req, res, next) {
  if(req.session.username) {
    console.log('index로 리다이렉트'); 
    return res.redirect('/mypage');
  }



  res.render('login', { res: {}});
});




router.post('/', function(req, res, next) {
  let phonenum = req.body.phonenum;
  console.log(phonenum)

  let userdata = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  console.log(JSON.stringify(userdata.users));
  let userlist = userdata.users;

  // 없는 유저
  if(userlist.indexOf(phonenum)==-1) {
    return res.render('login', { res: {"wrong":"Y"} });
  // 있는 유저
  } else {
    let username = userdata.userinfo[phonenum].name;
    console.log(username);
    req.session.username = username;
    return res.redirect('/mypage');
  }
});




module.exports = router;
