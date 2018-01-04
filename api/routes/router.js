const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const DummyData = require('../../db/models/data.json');
const Movies = require('../../db/models/movies.js');

router.get('/submit-movie/', (req, res) => {
  const movieReq = req.query.movieTitle;
  Movies.findOne({ movieTitle: movieReq }, (err, movie) => {
    if(err) {
      console.log(err);
      res.send("Server error processing movie");
    } else if(movie == null) {
      console.log(`${movieReq} does not exist in the database`);
      res.send(false);
    } else {
      console.log(`${movieReq} found in database. Result sent.`);
      res.json(movie);
    }
  });
});

router.post('/create-new-movie', (req, res) => {
  const movie = {
    movieTitle: req.body.movieTitle,
    numberOfReviews: 1,
    avgRating: req.body.rating,
    reviews: [{
      name: req.body.name,
      review: req.body.review,
      rating: req.body.rating
    }]
  };
  const newMovie = new Movies(movie);
  newMovie.save((err) => {
    if(err) {
      console.log("Error adding movie to archive: " + err);
      res.send("Unable to add " + newMovie.title + " to the flixreview archive.");
    } else {
      console.log(newMovie.movieTitle + " has been saved to the database");
      res.send(newMovie.movieTitle + " has been saved to the database");
    }
  });
});

module.exports = router;
