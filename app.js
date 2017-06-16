var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/memorygame';

 app.set('views', './views');
 app.set('view engine', 'pug');
  
 var Sequelize = require('sequelize');
 var db = new Sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/memorygame');
 

  var Food = db.define('food', {
      name: Sequelize.STRING
  });
 
  var Animal = db.define('animal', {
      name: Sequelize.STRING
  });
 
db.sync({force:true}).then(function() {
    Food.bulkCreate([
        {name: 'apple'}, 
        {name: 'bread'}, 
        {name: 'egg'}, 
        {name: 'chocolate'}, 
        {name: 'pizza'}
      ]);

    Animal.bulkCreate([
        {name: 'chicken'}, 
        {name: 'cow'}, 
        {name: 'dog'}, 
        {name: 'rabbit'}, 
        {name: 'sheep'}
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

app.post('/animal', function(req, res) {
	var answer1 = req.body.answer1
	var answer2 = req.body.answer2
	var answer3 = req.body.answer3
	var answer4 = req.body.answer4
	var answer5 = req.body.answer5
	
Animal.findAll({
	where: {
	$or: [{ 
		name: [answer1, answer2, answer3, answer4, answer5
		]}
	]
	}
}).then(result => {
		if (result.length === 0) {
			res.render('score', {result: result, message: 'Sorry, you didn\'t get anything right. Please try again'} )
		} else if (result.length === 1 || result.length === 2) {
			res.render('score', {result: result, message: 'You can do better, try again'} )
		} else if (result.length === 0) {
			res.render('score', {result: result, message: 'Sorry, you didn\'t get anything right. Please try again'} )
		} else if (result.length === 3 || result.length === 4) {
			res.render('score', {result: result, message: 'Good job, almost getting there..'} )
		} else {
			res.render('score', {result: result, message: 'Wow, superstar. You rock!'} )
		}
	});

  Animal.findAll({
        where: {
        $or: [
          { name: [answer1, answer2, answer3, answer4, answer5]}
        ]
        }
  }).then(result => {

    if (result.length === 0) {
      res.render('score', {result: result, message: 'Sorry, you didn\'t get anything right. Please try again'} )
    } else if (result.length === 1 || result.length === 2) {
      res.render('score', {result: result, message: 'You can do better, try again'} )
    } else if (result.length === 0) {
      res.render('score', {result: result, message: 'Sorry, you didn\'t get anything right. Please try again'} )
    } else if (result.length === 3 || result.length === 4) {
      res.render('score', {result: result, message: 'Good job, almost getting there..'} )
    } else {
      res.render('score', {result: result, message: 'Wow, superstar. You rock!'} )
    }

    
  });

})

//Game 2 page
app.get('/food', function(req,res) {
    res.render('food')
})

app.post('/food', function(req,res) {
	var answer1 = req.body.answer1
	var answer2 = req.body.answer2
	var answer3 = req.body.answer3
	var answer4 = req.body.answer4
	var answer5 = req.body.answer5
	var answer6 = req.body.answer6
	var answer7 = req.body.answer7

	Food.findAll({
        where: {
        $or: [
          { name: [answer1, answer2, answer3, answer4, answer5, answer6, answer7]}
        ]
        }
	}).then(result => {
		if (result.length === 0) {
		res.render('score', {result: result, message: 'Sorry, you didn\'t get anything right. Please try again'} )
		} else if (result.length === 1 || result.length === 2) {
		res.render('score', {result: result, message: 'You can do better, try again'} )
		} else if (result.length === 0) {
		res.render('score', {result: result, message: 'Sorry, you didn\'t get anything right. Please try again'} )
		} else if (result.length === 3 || result.length === 4) {
		res.render('score', {result: result, message: 'Good job, almost getting there..'} )
		} else {
		res.render('score', {result: result, message: 'Wow, superstar. You rock!'} )
		}
	});
})

// score
app.get('/score', function(req, res) {
	res.render('score')

})
 
const server = app.listen(8080, () => {
      console.log(`server has started ${server.address().port}`)
})
