var express = require('express');
var router = express.Router();
var data = require("../data.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:"Beverage" });
});

app.get('/json', function (req, res) {
  res.json('index', express.data);

});


module.exports = router;
