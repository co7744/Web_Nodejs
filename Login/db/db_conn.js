var mysql = require('mysql');
var connection = mysql.createConnection({
    user: 'root',
    password : '1234',
    port: 3306,
    database: 'my_db'
});

module.exports = connection;

