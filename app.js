const express = require('express');
const path = require('path');
const ejs = require('ejs');


const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("index");
});

app.listen(8080);
