var express = require('express');
var router = express.Router();
const path = require("path");

router.get('/index', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/assignments/assignment1/index.html'));
});

router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/assignments/assignment1/about.html'));
});

router.get('/contact', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/assignments/assignment1/contact.html'));
});


module.exports = router;