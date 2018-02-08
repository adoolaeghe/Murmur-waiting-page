var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  res.render('index');
});

router.get('/thankyou', function(req,res) {
  res.render('thankyou', {layout: false})
});

router.post('/signup', function(req,res) {
  console.log(req.body)
  res.redirect('/thankyou')
});

module.exports = router;
