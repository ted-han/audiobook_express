var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  //   if (err) throw err;
  //   console.log('Saved!');
  // });


  

  sess = req.session;
  console.log(sess);
  console.log('@@@@')
  console.log(sess.username);
  console.log('@@@@')
  let aa = sess.username
  sess.username = "ted"
  console.log(sess.username);
  console.log('@@@@')
  let bb = sess.username
  console.log(sess);

  res.render('index', { title: 'Express' });
});







module.exports = router;
