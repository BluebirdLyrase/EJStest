// server.js
// load the things we need
var express = require('express');
var app = express();

var data = require("./data.json")
app.use(express.static('photo'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

//data page

app.get('/showdata',function(req, res) {
    res.render('pages/showdata',{thisdata: data});
});
    
app.listen(8080);
console.log('8080 is the magic port');