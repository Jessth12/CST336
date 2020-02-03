var express = require('express');
var router = express.Router();
const path = require("path");

router.get('/index', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/labs/portfolio/index.html'));
});

router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/labs/portfolio/about.html'));
});

router.get('/contact', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/labs/portfolio/contact.html'));
});


module.exports = router;
