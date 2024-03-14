var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("hello from the console")
  res.body = "new message"
  res.json('/User endpoint responds with a string');
});

module.exports = router;
