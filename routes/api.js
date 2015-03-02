var express = require('express');
var router = express.Router();
var Twit = require('twit');
var twitter = new Twit({
  consumer_key: 'greJy1zT29f1TJ2xwz70o54Jz',
  consumer_secret: 'i65gC8SHQYz5s0UbYxqwcmm3IiZlEVLfaLMc2FcWzKolEeG98k',
  access_token: '2828730885-TzXLycg0wnaeUDr4MKQ30nk38t8XECC81g9j1A3',
  access_token_secret: '3tUActfwRVnBn5a6s2BSbTkm8VuKcIa1WXiL2JPJxxKRO'
});


/* GET api listeners. */
router.get('/tweet', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST api listeners */
router.post('/tweet', function(req, res) {
  var data = req.body;
  twitter.post('statuses/update', {
    status: data.tweet
  }, function(err, data, response) {
    res.send({
      err: err,
      data: data
    });
  });
});


router.post('/users', function(req, res, next) {
  console.log(req.body);
  var term = req.body.term;
  twitter.get('users/search', {
    q: term,
    page: 1,
    count: 5
  }, function(err, data, response) {
    var users = [];
    //screen_name
    if(data)
    {
      for(var i in data){
        users.push(data[i].screen_name);
      }
    }
    
    res.send({
      users: users
    });
  });

});

module.exports = router;
