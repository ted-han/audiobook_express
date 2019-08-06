var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
  if(req.session.username) {
    console.log('mypage로 리다이렉트');
    return res.redirect('/mypage');
  }

  res.render('signup', { res: {}});
});


router.post('/', function(req, res, next) {
  let phonenum = req.body.phonenum;
  let username = req.body.username;
  console.log(phonenum)
  console.log(username)

  let userdata = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  console.log(JSON.stringify(userdata.users));
  let userlist = userdata.users;

  // 없는 유저
  if(userlist.indexOf(phonenum)==-1) {
    //유저정보 저장
    userdata.userinfo[phonenum] = {"name": username, "soen":"N", "jiho":"N", "cnt":0};
    userdata.users.push(phonenum);
    fs.writeFileSync('public/savefiles/user.json', JSON.stringify(userdata));

    return res.redirect('/login');
  
  // 있는 유저
  } else {
    return res.render('signup', { res: {"wrong":"Y"} });
  }
});


module.exports = router;
