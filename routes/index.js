var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Accessibility Research',
    home: true
  });
});

router.get('/audio', function (req, res) { //it is connected to layout <a></a> and create the route
  res.render('audio', {
    title: 'Accessibility Research'
  });
})

module.exports = router;
