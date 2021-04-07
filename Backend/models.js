var mysql = require('mysql');

var db = mysql.createConnection({
    host: "database-1.cybwqjza72qt.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "kwstest1",
    port: 3306,
    database: "db"
});


module.exports = db;