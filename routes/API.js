/**
 * Created by kobe on 11/27/2016.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var parseString = require('xml2js').parseString;

var pageData = {};

router.get('/test', function(req, res) {
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var url = "http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAIVTXX5SB67M5NUWQ&AssociateTag=modne_20&IdType=ASIN&ItemId=B01JSZNVBC&Operation=ItemLookup&ResponseGroup=Reviews&Service=AWSECommerceService&Timestamp=2016-12-26T22%3A30%3A18.000Z&Signature=oYS4dSBVB09ZqlXk51uSv1buiJULZ9iEV6R11UmnUUk%3D"

    request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            // console.log(body) // Show the HTML for the Google homepage.
            parseString(body, function (err, result) {
                res.send(result);
            });
        }
        else{
            res.json({response:body, status: response.statusCode})
        }
    });
});

module.exports = router;