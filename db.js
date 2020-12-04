module.exports= {
    agents: [
        {
            "agent_id":"012345",
            "name": "Wesley Cenatus",
            "email":"Wesley.Cenatus@cwams.com",
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
      ],
    
    commission_rates: [
        {
            "commission_code": "010001",
            "commission_name": ["LF101","CF"],
            "platform":"TSYS",
            "agents":[
                {"name":"Larry Fitzgerald", "rate":"0.050"},
                {"name":"Chris Frey", "rate":"0.050"}
            ],
            "active":true
        },
        {
            "commission_code": "010002",
            "commission_name": ["LF101","CF"],
            "platform":"TriSource",
            "agents":[
                {"name":"Larry Fitzgerald", "rate":"0.050"},
                {"name":"Chris Frey", "rate":"0.050"}
            ],
            "active":true
        },
        {
            "commission_code": "010003",
            "commission_name": ["CNF102","CF"],
            "platform":"TriSource",
            "agents":[
                {"name":"Cam Newton", "rate":"0.050"},
                {"name":"Chris Frey", "rate":"0.050"}
            ],
            "active":false
        },
        {
            "commission_code": "010004",
            "commission_name": ["CN102","CF"],
            "platform":"TSYS",
            "agents":[
                {"name":"Cam Newton", "rate":"0.050"},
                {"name":"Chris Frey", "rate":"0.050"}
            ],
            "active":true
        },
        {
            "commission_code": "010005",
            "commission_name": ["WC102","CF"],
            "platform":"TSYS",
            "agents":[
                {"name":"Larry Fitzgerald", "rate":"0.050"},
                {"name":"Chris Frey", "rate":"0.050"}
            ],
            "active":false
        }
    ]

}