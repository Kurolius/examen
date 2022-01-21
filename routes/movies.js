var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET users listing. */
router.get('/', function(req, res, next) {
    
    let rawdata = fs.readFileSync('./public/json/movies_reduit.json');
    let movies = JSON.parse(rawdata);
    res.send(movies);
});

module.exports = router;