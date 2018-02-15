var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var firebase = require('firebase');


router.get('/', function(req,res) {
  res.render('index');
});

router.get('/thankyou', function(req,res) {
  res.render('thankyou', {layout: false})
});



module.exports = router;
