var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {

    request('http://httpbin.org/ip', {json: true}, (err,resReq,body) => {
        if (err) { 
            return console.log(err); 
        }
        res.render('ip', { ipAddress:body.origin });
    });
  
});

module.exports = router;