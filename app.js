var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg'); //include node postgres library.


app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('./public/css'));
app.use(bodyParser.urlencoded({extended: true}));

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/memorygame';

//Weclome page
app.get('/', function(req,res) { 
    res.render('welcome')
})


//Game 1 page
app.get('/gameone', function(req,res) {
    res.render('gameone')
})


//Game 2 page
app.get('/gametwo', function(req,res) {
    res.render('gametwo')
})

const server = app.listen(8080, () => {
    console.log(`server has started ${server.address().port}`)
})

// var express = require('express');
// var app = express();
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var session = require('express-session');

// app.use(cookieParser());
// app.use(session({
//     secret: 'saladus', 
//     resave: true,
//     saveUninitialized: false
// }));
// app.use(bodyParser.urlencoded({extended: true}));

// app.set('views', './views');
// app.set('view engine', 'pug');

// app.use(express.static('./public/css'))

// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/memorygame');


// var Food = sequelize.define('food', {
//     name: Sequelize.STRING
// });

// var Animal = sequelize.define('animal', {
//     name: Sequelize.STRING
// });


// sequelize.sync().then(function() {
//     Food.create({
//         name: "pizza" 
//         // egg, chocolate, bread, apple
//     });
//    Food.create({
//         name: "egg" 
//         // egg, chocolate, bread, apple
//     });



//     Animal.create({
//         name: sheep, rabbit, dog, chicken, cow
//     });  
// })



// //Weclome page
// app.get('/welcome', function(req,res) { 
//     res.render('welcome')
// })


// //Game 1 page
// app.get('/gameone', function(req,res) {
//     res.render('gameone')
// })


// //Game 2 page
// app.get('/gametwo', function(req,res) {
//     res.render('gametwo')
// })

// const server = app.listen(8080, () => {
//     console.log(`server has started ${server.address().port}`)
// })
