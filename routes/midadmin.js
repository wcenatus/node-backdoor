var db = require('../db')
var data = require('../db/db')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./backdoor.db');

var express = require('express')
var router = express.Router()

//Middleware?
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', async function(req, res){
  var temp = null
  await data.getAllFrom('midadmin').then(rows => temp = rows)

    res.render('pages/midadmin',{
      data: temp,
      location: 'midadmin'
    })
})

router.get('/:id', async function(req, res){
  var id =  req.params.id
  var temp = null
  await data.getMIDS(id).then(rows => temp = rows)
  console.log(temp)
    res.render('pages/midadmin_details',{
      data: temp,
      location: 'midadmin'
    })
})

module.exports = router