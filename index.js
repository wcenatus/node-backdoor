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
const https = require('https');
const querystring = require('querystring');

var express = require('express');
var app = express();
var agent = require('./agent')

app.use('/agent', agent)
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.get('/', async function(req,res){
    res.render('pages/index',{
        data:agents
    })
})

app.listen(8080);
console.log('8080 is the magic port');