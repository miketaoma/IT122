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

import cors from 'cors';
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req,res,next) => {
  Movie.find({}).lean()
    .then((movies) => {
      //res.render('home', { movies });
      res.render('home', {items: JSON.stringify(movies)});
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

//API for all items
app.get('/api/movies', (req,res) => {
  Movie.find({}).lean()
    .then((movies) => {
      res.json(movies);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Database Error occurred');
    });
});

//API for one item by title (case senstive)
app.get('/api/movies/:title', (req,res) => {
  Movie.findOne({ title:req.params.title }).lean()
    .then((movie) => {
      if (movie) {
        res.json(movie);
      } else {
        res.status(200).json('Movie not found with title: ' + req.params.title);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Database Error occurred');
    });
});

//API for deleting item
app.get( '/api/delete/:title', (req,res) => {   
  Movie.deleteOne({ title:req.params.title }).lean()
    .then((movie) => {           
      if (movie.deletedCount > 0) {
        res.json(req.params.title + ' deleted');
      } else {
        res.json(req.params.title + ' not found. Deletion failed.');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Database Error occurred');
    });
});

//API for adding item
app.post ( '/api/add/', (req,res) => {
  
  Movie.updateOne({ title:req.body.title }, req.body, { upsert: true })
    .then((movie) => {
      if (movie.modifiedCount > 0) {
        res.json(req.body.title + ' updated');
      } else if (movie.upsertedCount > 0) {
        res.json(req.body.title + ' added');
      } else {
        res.json(req.body.title + ' not found. Addition failed.');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Database Error occurred');
    });
});

app.use((req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');    
});