var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public/css'));
app.use(express.static('./public/img'));

app.use(bodyParser.urlencoded({extended: true}));

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/memorygame';

 app.set('views', './views');
 app.set('view engine', 'pug');
 
 app.use(express.static('./public/css'))
 
 var Sequelize = require('sequelize');
 var db = new Sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/memorygame');
 

  var Food = db.define('food', {
      name: Sequelize.STRING
  });
 
  var Animal = db.define('animal', {
      name: Sequelize.STRING
  });
 
 
db.sync().then(function() {
    Food.bulkCreate([
        {name: 'pizza'}, {name: 'egg'}, {name: 'chocolate'}, {name:'bread'}, {name:'apple'}
      ]);

    Animal.bulkCreate([
        {name: 'sheep'}, {name:'rabbit'}, {name: 'dog'}, {name: 'chicken'}, {name: 'cow'}
      ]);  
  })
 
 
//Weclome page
app.get('/', function(req,res) { 
    res.render('welcome')
})


//Game 1 page

app.get('/animal', function(req,res) {
    res.render('animal')
})

/*app.post('/gameone', function(req, res) {
	
})*/


//Game 2 page
app.get('/food', function(req,res) {
    res.render('food')
})
 
const server = app.listen(8080, () => {
      console.log(`server has started ${server.address().port}`)
})
