var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  let userid = req.session.userid;
  let username = req.session.username;
  let userdata = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  let 소은 = userdata.userinfo[userid]["소은"];
  let 지호 = userdata.userinfo[userid]["지호"];
  let jiyoo = userdata.userinfo[userid]["지유"];
  let 민후 = userdata.userinfo[userid]["민후"];
  let cnt = userdata.userinfo[userid]["cnt"];


  console.log('@@@@@@@@@@@@@@@@@@@@@');
  console.log(JSON.stringify(userdata))
  console.log('@@@@@@@@@@@@@@@@@@@@@');

  let result;


  if(userid=='01039224705') {
    result = {
      "userid": userid,
      "username": username,
      "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
      "cnt": cnt,
      "contents": [
        {"name":"지유","msg":"또 들려주세요","reply":jiyoo},
        {"name":"소은","msg":"자기 전에 들어요 감사합니다.,","reply":소은},
      ]
    };
  } else if(userid=='01071290163') {
    result = {
      "userid": userid,
      "username": username,
      "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
      "cnt": cnt,
      "contents": [
        {"name":"민후","msg":"감사합니다","reply":민후},
        {"name":"지호","msg":"좋아요! 감사합니다!!","reply":지호},
      ]
    };
  } else if(userid=='01075677737') {
    result = {
      "userid": userid,
      "username": username,
      "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
      "cnt": cnt,
      "contents": [
        {"name":"지유","msg":"또 들려주세요","reply":jiyoo},
        {"name":"지호","msg":"좋아요! 감사합니다!!","reply":지호},
      ]
    };
  } else {
    result = {
      "userid": userid,
      "username": username,
      "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
      "cnt": cnt,
      "contents": [
        {"name":"민후","msg":"감사합니다","reply":민후},
        {"name":"소은","msg":"자기 전에 들어요 감사합니다.,","reply":소은},
      ]
    };
  }

  console.log(result)

  return res.render('mypage', { "res": result });
});



router.post('/', function(req, res, next) {

  let userid = req.session.userid;
  let username = req.session.username;
  let toname = req.body.name;
  let msg = req.body.msg;

  let userdata = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  let msgdata = JSON.parse(fs.readFileSync('public/savefiles/msg.json', 'utf8'));
  
  let d = new Date();
  userdata.userinfo[userid][toname]='Y';
  msgdata.msg.push({"name":username, "to":req.body.name, "msg":msg, "time": `${d.toLocaleString()}`});

  // console.log(JSON.stringify(userdata))
  // console.log(JSON.stringify(msgdata));
   
  fs.writeFileSync('public/savefiles/user.json', JSON.stringify(userdata));
  fs.writeFileSync('public/savefiles/msg.json', JSON.stringify(msgdata));


  userdata = JSON.parse(fs.readFileSync('public/savefiles/user.json', 'utf8'));
  let 소은 = userdata.userinfo[userid]["소은"];
  let 지호 = userdata.userinfo[userid]["지호"];
  let jiyoo = userdata.userinfo[userid]["지유"];
  let 민후 = userdata.userinfo[userid]["민후"];
  let cnt = userdata.userinfo[userid]["cnt"];

  let result;

  if(userid=='01039224705') {
    result = {
      "userid": userid,
      "username": username,
      "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
      "cnt": cnt,
      "contents": [
        {"name":"지유","msg":"또 들려주세요","reply":jiyoo},
        {"name":"소은","msg":"자기 전에 들어요 감사합니다.,","reply":소은},
      ]
    };
  } else if(userid=='01071290163') {
    result = {
      "userid": userid,
      "username": username,
      "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
      "cnt": cnt,
      "contents": [
        {"name":"민후","msg":"감사합니다","reply":민후},
        {"name":"지호","msg":"좋아요! 감사합니다!!","reply":지호},
      ]
    };
  } else if(userid=='01075677737') {
    result = {
      "userid": userid,
      "username": username,
      "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
      "cnt": cnt,
      "contents": [
        {"name":"지유","msg":"또 들려주세요","reply":jiyoo},
        {"name":"지호","msg":"좋아요! 감사합니다!!","reply":지호},
      ]
    };
  } else {
    result = {
      "userid": userid,
      "username": username,
      "abook": ['도깨비방망이','토끼와거북이','잭과콩나무'],
      "cnt": cnt,
      "contents": [
        {"name":"민후","msg":"감사합니다","reply":민후},
        {"name":"소은","msg":"자기 전에 들어요 감사합니다.,","reply":소은},
      ]
    };
  }


  console.log(result)
  msgdata = JSON.parse(fs.readFileSync('public/savefiles/msg.json', 'utf8'));
  console.log('###################');
  console.log(JSON.stringify(msgdata));
  console.log('###################');


  return res.render('mypage', { "res": result });

  // res.redirect('/mypage');
});

module.exports = router;
