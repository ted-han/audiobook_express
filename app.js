var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
const session = require('express-session');


var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var mypageRouter = require('./routes/mypage');
var contentsRouter = require('./routes/contents');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(session({
  secret: '@#@$MYSIGN#@$#$',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
  }
 }));

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false ,limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false,limit: '50mb'}));
app.use(bodyParser.json());


app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use((req,res,next)=>{
  if(req.session.username){
    next();
  } else {
    console.log('세션이없다')
    res.redirect('/login');
  }
});

app.use('/mypage', mypageRouter);
app.use('/contents', contentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.redirect('/login');
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
