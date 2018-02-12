var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./routes/index");
var admin = require('firebase-admin');



var routes = require("./routes/index");

var allowCrossDomain = function(req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://firebasestorage.googleapis.com/v0/b/echomancy-cb4ff.appspot.com/o/vanishing.mp3?alt=media&token=9b7ebfd7-41bc-4091-ac43-f8ac70bb615d"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

var app = express();
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

app.use(allowCrossDomain);
app.use("/", routes);


module.exports = app.listen(process.env.PORT || 5000)
