var express = require('express');
var connection = require('./config/connection')
var app = express()
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

var exphbs  = require('express-handlebars');
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.send('Hello World! dude'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
