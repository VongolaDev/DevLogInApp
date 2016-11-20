var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
 

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/i', function (req, res) {
    res.render('index');
});
app.get('/home', function (req, res) {
    res.render('home');
});


app.get('/dashboard',function(req,res) {
	res.render('dashboard');
});

app.listen(8080)