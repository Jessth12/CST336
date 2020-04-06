var express = require('express');
var router = express.Router();
var request = require("request");

router.get('/', function(req, res, next) {
  res.render('labs/lab8/index');
});



module.exports = router;