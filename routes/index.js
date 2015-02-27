var express = require('express');
var router = express.Router();
var Twit = require('twit');
var twitter = new Twit({
    consumer_key: 'greJy1zT29f1TJ2xwz70o54Jz',
    consumer_secret: 'i65gC8SHQYz5s0UbYxqwcmm3IiZlEVLfaLMc2FcWzKolEeG98k',
    access_token: '2828730885-TzXLycg0wnaeUDr4MKQ30nk38t8XECC81g9j1A3',
    access_token_secret: '3tUActfwRVnBn5a6s2BSbTkm8VuKcIa1WXiL2JPJxxKRO'
});


/* GET home page. */
router.get('/', function(req, res, next) {

    //get okc trends
    var trends = null;
    twitter.get('/trends/place', {
        id: 23424977
    }, function(err, data, response) {
        if (!err) {
            trends = data[0].trends;
            console.log(trends);
            res.render('index', {
                title: 'Lewd Holtz',
                trends: trends
            });
        }
        else {
            res.render('index', {
                title: 'Lewd Holtz'
            });
        }

    });

    //T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    //  console.log(data)
    //});


});

module.exports = router;
