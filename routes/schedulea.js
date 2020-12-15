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
        data: db.schedulea,
        location: 'schedulea'
    })
  })

router.get('/create', function (req, res) {
    res.render('pages/schedulea_create', {
        location: 'schedulea'
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
    res.render('pages/schedulea_details', {
        data: data,
        location: 'schedulea'
    })
})

// Edit Schedule A 
router.get('/edit/:id', function (req, res) {
  var id = req.params.id
    var data = null

    db.schedulea.forEach(template=>{
        if(id === template.id){
            data = template
        }
    });
    res.render('pages/schedulea_edit', {
        data: data,
        location: 'schedulea'
    })
})

module.exports = router