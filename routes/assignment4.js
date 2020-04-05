var express = require('express');
var router = express.Router();
var request = require("request");

router.get('/', function(req, res, next) {
  res.render('assignments/assignment4/index');
});

router.get('/java', function(req, res, next) {
    res.render('assignments/assignment4/java');
});

router.get('/cplusplus', function(req, res, next) {
    res.render('assignments/assignment4/cplusplus');
});

router.get('/reference', function(req, res, next) {
    res.render('assignments/assignment4/reference');
});

module.exports = router;
