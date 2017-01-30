/**
 * Created by kobe on 11/27/2016.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var parseString = require('xml2js').parseString;

var pageData = {};

router.get('/test', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send('Oh Hi There :3')
// var url= "http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAIVTXX5SB67M5NUWQ&AssociateTag=modne_20&IdType=ASIN&ItemId=B01JSZNVBC&Operation=ItemLookup&ResponseGroup=Reviews&Service=AWSECommerceService&Timestamp=2016-12-28T04%3A21%3A41.000Z&Signature=EU6Y4L3IKRvblzabzWLpOF7tE6vBd5vFdL3hh%2BZgVxk%3D"
//     request(url, function (error, response, body) {
//
//         if (!error && response.statusCode == 200) {
//             // console.log(body) // Show the HTML for the Google homepage.
//             parseString(body, function (err, result) {
//                 var iframeUrl = result.ItemLookupResponse.Items[0].Item[0].CustomerReviews[0].IFrameURL[0];
//                 request(iframeUrl, function (error, response, body) {
//                     console.log(body)
//                     res.send(body)
//                 });
//                 // res.send(result.ItemLookupResponse.Items[0].Item[0].CustomerReviews[0].IFrameURL[0]);
//             });
//         }
//         else{
//             res.json({response:body, status: response.statusCode})
//         }
//     });
});

module.exports = router;
