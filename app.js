const express = require('express')
const pug = require('pug')
const bodyParser = require('body-parser')
/*const Sequelize = require('sequelize');
const db = new Sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/blogapp');*/

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true})); // get information from html forms
app.use(express.static('public'));


app.get('/animal', (req, res) => {
    res.render('animal')
});



const server = app.listen(8080, () => {
    console.log('server has started at ', server.address().port)
}); // application listens to the request. And everytime the browser goes to localhost:8080 it will print out "Server has started at".
