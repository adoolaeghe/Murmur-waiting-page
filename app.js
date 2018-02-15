var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./routes/index");
var admin = require('firebase-admin');
var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyCaS4yn2wyCNCT8An9MfUKKaBJxaX70FGs",
  authDomain: "email-sub.firebaseapp.com",
  databaseURL: "https://email-sub.firebaseio.com",
  storageBucket: "email-sub.appspot.com",
};
firebase.initializeApp(config);
var ref = firebase.app().database().ref();



var routes = require("./routes/index");

var allowCrossDomain = function(req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://murmur.fm/signup"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};


var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

app.use(allowCrossDomain);

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// View Engine
app.set("views", path.join(__dirname, "views/layouts"));
app.engine("handlebars", exphbs({ defaultLayout: "index" }));
app.set("view engine", "handlebars");

// bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/src", express.static(path.join(__dirname, "src")));
//routes
app.post('/signup', function(req,res) {
  ref.push({email: req.body.message}, function(error) {
  if (error)
    console.log('Error has occured during saving process')
  else
    var response = {
      status  : 200,
      success : 'Updated Successfully'
  }
    res.end(JSON.stringify(response));
  })
});

app.use("/", routes);


module.exports = app.listen(process.env.PORT || 5000)
