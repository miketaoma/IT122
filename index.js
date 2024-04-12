"use strict"

import * as data from './data.js';
import express from 'express';

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.static('./public')); // allows direct navigation to static files
app.use(express.urlencoded({
  extended: true
})); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  console.log(req.query)
  res.render('home', { movies: data.getAll() });
});

app.listen(app.get('port'), () => {
    console.log('Express started');    
});