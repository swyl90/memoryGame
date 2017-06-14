var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg'); //include node postgres library.


app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('./public/css'));
app.use(express.static('./public/img'));
app.use(bodyParser.urlencoded({extended: true}));

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/memorygame';

//Weclome page
app.get('/', function(req,res) { 
    res.render('welcome')
})


//Game 1 page
app.get('/animal', function(req,res) {
    res.render('animal')
})


//Game 2 page
app.get('/food', function(req,res) {
    res.render('food')
})

const server = app.listen(8080, () => {
    console.log(`server has started ${server.address().port}`)
})


