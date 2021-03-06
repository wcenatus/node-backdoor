module.exports= {
    agents: [
        {
            "agent_id":"012341",
            "standard_agent":false,
            "name": "Acquiring Solutions International",
            "email":"info@aqsl.com",
            "codes":{
                "TSYS":"ASI101",
                "TriSource":"0123456789"
            },
            "reports_to": "null",
            "phone":"(516)123-4567",
            "mobile":"(203)123-4567",
            "address":{
                "street": "23961 Craftsman Road, Suite E",
                "city": "Calabasas",
                "state": "CA",
                "zipcode":"91302",
                "country":"United States"
            },
            "MID":
            ["4191000012340","4191000012341","4191000012342","4191000012343","4191000012344","4191000012345","4191000012346","4191000012347","4191000012348","4191000012349"],
            "active": true   
        },
        {
            "agent_id":"012345",
            "standard_agent":true,
            "name": "Wesley Cenatus",
            "email":"Wesley.Cenatus@cwams.com",
            "codes":{
                "TSYS":"WC101",
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
            "standard_agent":true,
            "name": "Larry Fitzgerald",
            "email":"Larry.Fitzgerald@cwams.com",
            "codes":{
                "TSYS":"LF101",
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
            "standard_agent":true,
            "name": "Cam Newton",
            "email":"Cam.Newton@cwams.com",
            "codes":{
                "TSYS":"CN101",
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
        },
        {
            "agent_id":"012344",
            "standard_agent":false,
            "name": "Balanced Partners",
            "email":"info@bp.com",
            "codes":{
                "TSYS":"BP101",
                "TriSource":"0123456789"
            },
            "reports_to": "null",
            "phone":"(516)123-4567",
            "mobile":"(203)123-4567",
            "address":{
                "street": "23961 Craftsman Road, Suite E",
                "city": "Calabasas",
                "state": "CA",
                "zipcode":"91302",
                "country":"United States"
            },
            "MID":["4191000012340","4191000012341","4191000012342","4191000012343","4191000012344","4191000012345"],
            "active": true   
        },
        {
            "agent_id":"012349",
            "standard_agent":true,
            "name": "Ray Lewis",
            "email":"Ray.Lewis@cwams.com",
            "codes":{
                "TSYS":"RL101",
                "TriSource":"0123456789"
            },
            "reports_to": "John Harbaugh",
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
        }
      ],
    
    commission_rates: [
        {
            "commission_code": "010001",
            "commission_name": ["LF101","BB"],
            "platform":"TSYS",
            "agents":[
                {"name":"Larry Fitzgerald", "rate":"50%", "active":false},
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
                {"name":"Larry Fitzgerald", "rate":"50%", "active":false},
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
            "active":true
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
                {"name":"Larry Fitzgerald", "rate":"50%", "active":false},
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
            "name":"Modius",
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