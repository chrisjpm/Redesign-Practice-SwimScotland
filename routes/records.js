var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('records', { domain: 'SwimScotland', title: 'Records', layout: 'layout.hbs' });
});

module.exports = router;
