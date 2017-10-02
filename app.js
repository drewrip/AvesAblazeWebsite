const express = require('express');
const path = require('path');
const ejs = require('ejs');


const app = express();
app.use(express.static(__dirname + '/views'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("index");
});

app.post("/aboutUs", function(req, res){
  res.render("aboutUs");
})

app.listen(8080);
