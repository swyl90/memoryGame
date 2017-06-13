var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('./public/css'))
app.use(bodyParser.urlencoded({extended: true}));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/memorygame');

//Weclome page
app.get('/welcome', function(req,res) {
    pg.connect(connectionString, function(err, client, done) {
        if(err){ //handle connection errors. 
            throw err;
        }
        done(); 
        res.render('welcome')
    });
})


//Game 1 page
app.get('/gameOne', function(req,res) {
    pg.connect(connectionString, function(err, client, done) {
        if(err){ //handle connection errors. 
            throw err;
        }
        done(); 
        res.render('gameOne')
    });
})


//Game 2 page
app.get('/gameTwo', function(req,res) {
    pg.connect(connectionString, function(err, client, done) {
        if(err){ //handle connection errors. 
            throw err;
        }
        done(); 
        res.render('gameTwo')
    });
})

const server = app.listen(8080, () => {
    console.log(`server has started ${server.address().port}`)
})