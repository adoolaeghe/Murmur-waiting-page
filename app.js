var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var routes = require('./routes/index');

//init APP
var routes = require('./routes/index');

var app = express();

// View Engine
app.set('views', path.join(__dirname,'views/layouts'));
app.engine('handlebars', exphbs({defaultLayout:'index'}));
app.set('view engine', 'handlebars');

// bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/src", express.static(path.join(__dirname, 'src')));
//routes

app.use('/', routes);

module.exports = app.listen(3000);
