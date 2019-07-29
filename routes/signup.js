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




// {
//   "users": [
//     "01062541558",
//     "01047627245"
//   ],
//   "userinfo": {
//     "01062541558": {
//       "name": "ted"
//     },
//     "01047627245": {
//       "name": "jean"
//     }
//   }
// }
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
    userdata.userinfo[phonenum] = {"name": username};
    userdata.users.push(phonenum);
    fs.writeFileSync('public/savefiles/user.json', JSON.stringify(userdata));

  let aaaa = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  console.log('!!!!!')
  console.log(JSON.stringify(aaaa));
  console.log('!!!!!')


    return res.redirect('/login');
  // 있는 유저
  } else {
    return res.render('signup', { res: {"wrong":"Y"} });
  }
});




module.exports = router;
