var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

module.exports= {
    initdb: function(){
        db.serialize(function() {
            db.run(`CREATE TABLE midadmin (
                id INT PRIMARY KEY,
                created VARCHAR(255), 
                date VARCHAR(255), 
                seq VARCHAR(255), 
                mid VARCHAR(255)
                )`);
            var stmt = db.prepare("INSERT INTO midadmin VALUES (?, ?, ?, ?, ?)");
            for (var i = 0; i < 10; i++) {
                var d = new Date();
                var n = d.toLocaleTimeString();
                stmt.run(i,'2020-28-12',n,'10001','123456789');
            }
            stmt.finalize();
            db.each("SELECT * FROM midadmin", function(err, row) {
                console.log(row.id + ": " + JSON.stringify(row));
            });
        });
        db.close();
    }
}
