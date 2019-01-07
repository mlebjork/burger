var express = require('express');
var connection = require('./config/connection')
var app = express()
var path = require('path');
var PORT = process.env.PORT || 3000

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname+"public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs  = require('express-handlebars');
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// app.get('/', (req, res) => res.send('Hello World! dude'))
app.use(routes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))



