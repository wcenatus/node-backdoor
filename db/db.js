var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./backdoor.db');

module.exports= {
    initdb: function(){
        db.serialize(function() {
            db.run(`CREATE TABLE midadmin (
                id INT PRIMARY KEY,
                name VARCHAR(255),
                created VARCHAR(255), 
                date VARCHAR(255), 
                mid VARCHAR(255)
                )`);
            var set = ['Payze', 'Mobius', 'RocketGate', 'Adult Friend Finder', 'VS Media', 'SegPay']
            var stmt = db.prepare("INSERT INTO midadmin VALUES (?, ?, ?, ?, ?)")
            
            for (var i = 0; i < set.length; i++) {
                var randomint = Math.floor(1000000 + Math.random() * 900000);
                var d = new Date();
                var n = d.toLocaleDateString();
                stmt.run(i, set[i],'2020-28-12','2020-29-12',randomint);
            }
            stmt.finalize();
            db.each("SELECT * FROM midadmin", function(err, row) { 
                console.log(row.id + ": " + JSON.stringify(row));
            });
        });
        db.close();
        
    },
    populateMids: function(){
        db.serialize(function() {
            
            var set = ['Payze', 'Mobius', 'RocketGate', 'Adult Friend Finder', 'VS Media', 'SegPay']
            var stmt = db.prepare("INSERT INTO mids VALUES (?, ?, ?)")
            
            for (var i = 0; i < 100; i++) {
                var randomint = Math.floor(1000000 + Math.random() * 900000);
                var parent_id = Math.floor(Math.random() * 6) + 1  
                stmt.run(i, parent_id,randomint);
            }
            stmt.finalize();
        });
        db.close();
        
    },
    //Global Use
    getAllFrom: function(location) {
        return new Promise((resolve, reject) => {
            let orders = [];
            db.all(`SELECT * FROM ${location}`, function(err, rows) {
              resolve(rows);
            });  
        }) 
    },

    getOneFrom: function(unique_id,location){
        return new Promise((resolve, reject)=>{
            let orders = [];
            db.all(`SELECT * FROM ${location} WHERE id = ${unique_id}`, function(err, rows) {
              resolve(rows);
            });  
        })

    },
    //Exclusive to MID admin
    getMIDS: function(parent_id){
        return new Promise((resolve, reject) => {
            let orders = [];
            db.all(`SELECT mids.id, mids.parent_id, mids.mid, midadmin.name
                    FROM mids
                    INNER JOIN midadmin ON mids.parent_id=midadmin.id WHERE parent_id = ${parent_id}`, function(err,rows){
                        resolve(rows);
                    }); 
        }) 
    },
    addMID: function(id, mid){
        return new Promise((resolve, reject) => {
            let orders = [];
            db.run(`INSERT INTO mids (parent_id,mid) VALUES= ${id + ',' + mid}`, function(err, rows) {
              resolve(rows);
            });  
        }) 
    },
    deleteMID: function(id, mid){
        return new Promise((resolve, reject) => {
            let orders = [];
            db.run(`DELETE FROM mids WHERE mid = ${mid}`, function(err, rows) {
              resolve(rows);
            });  
        }) 
    }

}
