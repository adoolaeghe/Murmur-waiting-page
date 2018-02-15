var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyCaS4yn2wyCNCT8An9MfUKKaBJxaX70FGs",
  authDomain: "email-sub.firebaseapp.com",
  databaseURL: "https://email-sub.firebaseio.com",
  storageBucket: "email-sub.appspot.com",
};
firebase.initializeApp(config);
var ref = firebase.app().database().ref();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req,res) {
  res.render('index');
});

router.get('/thankyou', function(req,res) {
  res.render('thankyou', {layout: false})
});

router.post('/signup', function(req,res) {
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

module.exports = router;
