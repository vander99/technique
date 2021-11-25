var express = require('express')
var bodyParser = require('body-parser')

var mainRoute = require('./routes');

var app = express() 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(mainRoute)

app.listen(4000, function () {
  console.log("Application écoutant sur le port 4000 !");
});


