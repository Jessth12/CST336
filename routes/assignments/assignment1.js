var express = require('express');
var router = express.Router();
const path = require("path");

router.get('/index', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/assignments/assignment1/index.html'));
});

router.get('/java', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/assignments/assignment1/java.html'));
});
router.get('/cplusplus', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/assignments/assignment1/cplusplus.html'));
});
router.get('/python', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/assignments/assignment1/python.html'));
});
router.get('/reference', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/assignments/assignment1/reference.html'));
});


module.exports = router;