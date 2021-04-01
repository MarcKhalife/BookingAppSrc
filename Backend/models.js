var mysql = require('mysql');

var db = mysql.createConnection({
    host: "",
    user: "admin",
    password: "",
    port: 3306,
    database: "db"
});


module.exports = db;