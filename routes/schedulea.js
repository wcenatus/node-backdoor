var db = require('../db')

var express = require('express')
var router = express.Router()

//Middleware?
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res) {
    res.render('pages/schedulea', {
        data: db.schedulea
    })
  })

//Get Schedule A
router.get('/:id', function (req, res) {
  var id = req.params.id
    var data = null

    db.schedulea.forEach(template=>{
        if(id === template.id){
            data = template
        }
    });
    res.render('pages/scheduleadetails', {
        data: data
    })
})

// Edit Schedule A 
router.route('/edit/:id')
  .get(function (req, res) {
    var id = req.params.id
    var data = null

    db.agents.forEach(agent=>{
        if(id === agent.agent_id){
            data = agent
        }
    });
    
    res.render('pages/edit_schedulea', {
        data: data
    })
  })
  .patch(function (req, res){
    //TODO When Schedule A is updated
  })

module.exports = router