var db = require('../db')

var express = require('express')
var router = express.Router()

//Middleware?
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res) {
    res.render('pages/commission', {
        data: db.commission_rates
    })
})

router.get('/:id', function (req, res) {
    var id = req.params
    var data = null

    db.commission_rates.forEach(commission=>{
        if(id === commission.commission_code){
            data = commission
        }
    });
    res.render('pages/commissiondetails', {
        data: data
    })
})


  module.exports = router