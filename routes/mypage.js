var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  let userid = req.session.userid;
  let username = req.session.username;
  let userdata = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  let msgsoen = userdata.userinfo[userid]["soen"];
  let msgjiho = userdata.userinfo[userid]["jiho"];
  let cnt = userdata.userinfo[userid]["cnt"];


  console.log('@@@@@@@@@@@@@@@@@@@@@');
  console.log(JSON.stringify(userdata))
  console.log('@@@@@@@@@@@@@@@@@@@@@');
  
  let result = {
    "userid": userid,
    "username": username,
    "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
    "cnt": cnt,
    "contents": [
      {"name":"소은","msg":"안녕하세요! 읽어주신 시를 들었어요. 어렵지만 너무 좋아요. 감사합니다.","reply":msgsoen},
      {"name":"지호","msg":"감사합니다. 자기 전에 들었어요.","reply":msgjiho},
    ]
  };

  console.log(result)

  return res.render('mypage', { "res": result });
});



router.post('/', function(req, res, next) {

  let userid = req.session.userid;
  let username = req.session.username;
  let toname = req.body.name=='소은'?'soen':'jiho';
  let msg = req.body.msg;

  let userdata = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  let msgdata = JSON.parse(fs.readFileSync('public/savefiles/msg.json', 'utf8'));
  
  userdata.userinfo[userid][toname]='Y';
  msgdata.msg.push({"name":username, "to":req.body.name, "msg":msg});

  // console.log(JSON.stringify(userdata))
  // console.log(JSON.stringify(msgdata));
   
  fs.writeFileSync('public/savefiles/user.json', JSON.stringify(userdata));
  fs.writeFileSync('public/savefiles/msg.json', JSON.stringify(msgdata));


  userdata = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  let msgsoen = userdata.userinfo[userid]["soen"];
  let msgjiho = userdata.userinfo[userid]["jiho"];
  let cnt = userdata.userinfo[userid]["cnt"];

  let result = {
    "userid": userid,
    "username": username,
    "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
    "cnt": cnt,
    "contents": [
      {"name":"소은","msg":"안녕하세요! 읽어주신 시를 들었어요. 어렵지만 너무 좋아요. 감사합니다.","reply":msgsoen},
      {"name":"지호","msg":"감사합니다. 자기 전에 들었어요.","reply":msgjiho},
    ]
  };

  console.log(result)
  msgdata = JSON.parse(fs.readFileSync('public/savefiles/msg.json', 'utf8'));
  console.log('###################');
  console.log(JSON.stringify(msgdata));
  console.log('###################');


  return res.render('mypage', { "res": result });

  // res.redirect('/mypage');
});

module.exports = router;
