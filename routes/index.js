var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    

    
    
    //T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    //  console.log(data)
    //});
    
  res.render('index', { title: 'Lewd Holtz' });
});

module.exports = router;
