var express = require('express');
var router = express.Router();
const path = require("path");

router.get('/index', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../views/labs/lab2/index.html'));
});

module.exports = router;

