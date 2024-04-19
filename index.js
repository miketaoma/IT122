"use strict"

import express from 'express';
import { Movie } from "./models/Movie.js";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use('/public', express.static('public')); // allows direct navigation to static files
app.use(express.urlencoded({
  extended: true
})); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    Movie.find({}).lean()
        .then((movies) => {
          res.render('home', { movies });
        })
        .catch(err => next(err));
});

app.get('/details/:title', (req,res,next) => {
    Movie.findOne({ title:req.params.title }).lean()
        .then((movie) => {           
          res.render('details', {result: movie} );
        })
        .catch(err => next(err));
});

app.use((req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');    
});