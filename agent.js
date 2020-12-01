const agents = [
    {
        "agent_id":"012345",
        "name": "Wesley Cenatus",
        "codes":{
            "TSYS":"0123456789",
            "TriSource":"0123456789"
        },
        "reports_to": "Christopher Dibenedetto",
        "phone":"(516)123-4567 x1619",
        "mobile":"(203)123-4567",
        "address":"6900 Jericho Turnpike, Syosset, NY 11791",
        "active": true   
    },
    {
        "agent_id":"012346",
        "name": "Larry Fitzgerald",
        "email":"Larry.Fitzgerald@cwams.com",
        "codes":{
            "TSYS":"0123456789",
            "TriSource":"0123456789"
            },
        "reports_to": "Kliff Kingsbury",
        "phone":"(516)123-4567 x1619",
        "mobile":"(203)123-4567",
        "address":"6900 Jericho Turnpike, Syosset, NY 11791",
        "active": false   
    },
    {
        "agent_id":"012347",
        "name": "Cam Newton",
        "email":"Cam.Newton@cwams.com",
        "codes":{
            "TSYS":"0123456789",
            "TriSource":"0123456789"
        },
        "reports_to": "Bill Belichick",
        "phone":"(516)123-4567 x1619",
        "mobile":"(203)123-4567",
        "address":"6900 Jericho Turnpike, Syosset, NY 11791",
        "active": true   
    }
  ]

var express = require('express')
var router = express.Router()

//Middleware?
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

//Get Agent
router.get('/:id', function (req, res) {
  var id = req.params.id
    var data = null

    agents.forEach(agent=>{
        if(id === agent.agent_id){
            data = agent
        }
    });
    res.render('pages/agentdetails', {
        data: data
    })
})

// Edit Agent 
router.route('/edit/:id')
  .get(function (req, res) {
    var id = req.params.id
    var data = null

    agents.forEach(agent=>{
        if(id === agent.agent_id){
            data = agent
        }
    });
    
    res.render('pages/editagent', {
        data: data
    })
  })
  .patch(function (req, res){
    //TODO When agent is updated
  })

module.exports = router