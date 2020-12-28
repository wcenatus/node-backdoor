var db = require('../db')

var express = require('express')
var router = express.Router()

//Middleware?
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function(req, res){
    res.render('pages/midadmin',{
      location: 'midadmin'
    })
})

module.exports = router