var express = require("express");
var app = express();
var router = require("./router/main")(app);
var conn = require("./db/db_conn");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/public',express.static(__dirname+ '/public'));

var server = app.listen(3000, function(){
    console.log("Express server started PORT:3000")
})

/*conn.connect();

conn.query('SELECT * from id', function(err, rows, field){
    if(!err){
        console.log(rows);
    }else{
        console.log(err);
    }
})

conn.end();*/

