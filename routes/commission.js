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
        data: db.commission_rates,
        location: 'commission'
    })
})

router.get('/:id', function (req, res) {
    var id = req.params.id
    var data = null
    var agents= null
    
    db.commission_rates.forEach(commission=>{
        if(id === commission.commission_code){
            
            data = commission
            agents = commission.agents
        }
    });
    res.render('pages/commissiondetails', {
        data: data,
        agents: agents,
        location: 'commission'
    })
})

router.get('/edit/:id', function (req, res) {
    var id = req.params.id
    var data = null
    var agents= null

    db.commission_rates.forEach(commission=>{
        if(id === commission.commission_code){
            
            data = commission
            agents = commission.agents
        }
    });
    
    res.render('pages/editcommission', {
        data: data,
        agents: agents,
        location: 'commission'
    })
})


  module.exports = router