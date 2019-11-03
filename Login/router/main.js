module.exports = function(app)
{
    app.get('/', function(req, res){
        res.render('index.html')
    });
    app.get('/signUp',function(req, res){
        res.render('signUp.html');
    })
}