var db = require('./db')
var sqldb = require('./db/db')

const https = require('https');
const querystring = require('querystring');

var express = require('express');
var app = express();
var agent = require('./routes/agent')
var commission = require('./routes/commission')
var schedulea = require('./routes/schedulea')
var midadmin = require('./routes/midadmin')

// sqldb.initdb()

app.use('/agent', agent)
app.use('/commission', commission)
app.use('/schedulea', schedulea)
app.use('/midadmin', midadmin)

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.get('/', async function(req,res){
    return res.redirect('/agent');
})

app.listen(8080);
console.log('8080 is the magic port');