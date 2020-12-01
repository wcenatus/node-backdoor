var db = require('./db')

const https = require('https');
const querystring = require('querystring');

var express = require('express');
var app = express();
var agent = require('./routes/agent')
var commission = require('./routes/commission')

app.use('/agent', agent)
app.use('/commission', commission)
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.get('/', async function(req,res){
    res.render('pages/index',{
        data:db.agents
    })
})

app.listen(8080);
console.log('8080 is the magic port');