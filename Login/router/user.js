var db = require("../db/db_conn");
module.exports=function(app){
    app.get('/signUp', function(req, res, next){
        res.render("views/signup")
    });

}