var db = require('../db')

var express = require('express')
var router = express.Router()

//Middleware?
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res) {
    return res.redirect('/');
  })

//Get Agent
router.get('/:id', function (req, res) {
  var id = req.params.id
    var data = null

    db.agents.forEach(agent=>{
        if(id === agent.agent_id){
            data = agent
        }
    });
    res.render('pages/agentdetails', {
        data: data,
        location: 'agent'
    })
})

// Edit Agent 
router.route('/edit/:id')
  .get(function (req, res) {
    var id = req.params.id
    var data = null

    db.agents.forEach(agent=>{
        if(id === agent.agent_id){
            data = agent
        }
    });
    
    res.render('pages/editagent', {
        data: data,
        location: 'agent'
    })
  })
  .patch(function (req, res){
    //TODO When agent is updated
  })

module.exports = router