var express = require('express');
var router = express.Router();
const queries = require('../db/queries');

router.get('/', function(req, res, next) {
  queries.getscores().then(function(result) {
    res.json(result);
  });
});

router.post('/', function(req, res) {
  console.log('posting');
  console.log(req.body);
  queries.postScore(req.body).then(function(result) {
    res.send('success')
  })
})

module.exports = router;
