var express = require('express');
var connection = require('./config/connection')
var app = express()
var port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))