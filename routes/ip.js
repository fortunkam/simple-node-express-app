var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {

    request('http://httpbin.org/ip', {json: true}, (err,resReq,body) => {
    var ip = '';
    var error=''    
    if (err) { 
            error = err;
        }
        else{
            ip = body.origin;
        }
        res.render('ip', { ipAddress:ip, error: error });
    });
  
});

module.exports = router;