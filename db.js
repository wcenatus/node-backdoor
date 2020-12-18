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
            "address":{
                "street": "6900 Jericho Turnpike",
                "city": "Syosset",
                "state": "NY",
                "zipcode":"11791",
                "country":"United States"
            },
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
            "address":{
                "street": "6900 Jericho Turnpike",
                "city": "Syosset",
                "state": "NY",
                "zipcode":"11791",
                "country":"United States"
            },
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
            "address":{
                "street": "6900 Jericho Turnpike",
                "city": "Syosset",
                "state": "NY",
                "zipcode":"11791",
                "country":"United States"
            },
            "active": true   
        }
      ],
    
    commission_rates: [
        {
            "commission_code": "010001",
            "commission_name": ["LF101","BB"],
            "platform":"TSYS",
            "agents":[
                {"name":"Larry Fitzgerald", "rate":"50%"},
                {"name":"Bill Belichick", "rate":"25%"},
                {"name":"Cam Newton", "rate":"25%"}
            ],
            "active":true
        },
        {
            "commission_code": "010002",
            "commission_name": ["LF101","BB"],
            "platform":"TriSource",
            "agents":[
                {"name":"Larry Fitzgerald", "rate":"50%"},
                {"name":"Bill Belichick", "rate":"50%"}
            ],
            "active":true
        },
        {
            "commission_code": "010003",
            "commission_name": ["CNF102","BB"],
            "platform":"TriSource",
            "agents":[
                {"name":"Cam Newton", "rate":"50%"},
                {"name":"Bill Belichick", "rate":"50%"}
            ],
            "active":false
        },
        {
            "commission_code": "010004",
            "commission_name": ["CN102","BB"],
            "platform":"TSYS",
            "agents":[
                {"name":"Cam Newton", "rate":"50%"},
                {"name":"Bill Belichick", "rate":"50%"}
            ],
            "active":true
        },
        {
            "commission_code": "010005",
            "commission_name": ["WC102","BB"],
            "platform":"TSYS",
            "agents":[
                {"name":"Larry Fitzgerald", "rate":"50%"},
                {"name":"Bill Belichick", "rate":"50%"}
            ],
            "active":false
        }
    ],
    schedulea:[
        {
            "id":'1',
            "name":"Standard Agent",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'2',
            "name":"Legacy Residuals",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'3',
            "name":"Signature Bank",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'4',
            "name":"Pillar Payments",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'5',
            "name":"9300-7278 Quebec Inc",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'6',
            "name":"Bethpage FCU",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'7',
            "name":"Campminder",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'8',
            "name":"Gold Coast Bank",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'9',
            "name":"Modus",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'10',
            "name":"National Proccess LLC",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'11',
            "name":"Net Billing",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'12',
            "name":"Software for Moving",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'13',
            "name":"Mobius - Mainstream",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },
        {
            "id":'14',
            "name":"Mobius - Non RHR",
            "added_by":"system",
            "start_date":"12/4/2020",
            "end_date":"1/20/2023",
            "active":true
        },

    ]

}