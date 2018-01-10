const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const DummyData = require('../../db/models/data.json');
const Movies = require('../../db/models/movies.js');

router.get('/submit-movie', (req, res) => {
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
  const data = req;
  const movie = {
    movieTitle: req.body.movieTitle,
    numberOfReviews: 1,
    avgRating: req.body.rating,
    reviews: []
  };

  createMovieUtil(data)
  .then((fulfilled) => {
    movie.reviews.push(fulfilled);
    return movie;
  })
  .then((fulfilled) => {
    const newMovie = new Movies(fulfilled);
    return newMovie;
  })
  .then((fulfilled) => {
    fulfilled.save((err) => {
      if(err) {
        console.log("Error adding movie to archive: " + err);
        res.header('errorFlag', '009');
        res.send("Uh oh! Unable to add " + fulfilled.movieTitle + " to Flixreview.\nTry again or contact support for help.");
      } else {
        console.log(fulfilled.movieTitle + " has been saved to the database");
        res.send("Success! " + fulfilled.movieTitle + " has been added to Flixreview with your review.");
      }
    });
  })
  .catch((error) => {
    console.log("Error adding movie to archive: " + err);
    res.header('errorFlag', '009');
    res.send("Uh oh! Unable to add the movie to Flixreview.\nTry again or contact support for help.");
  });
});

const createMovieUtil = (request) => {
  const req = request;
  return new Promise((resolve, reject) => {
    if(req) {
      const review = {
        name: req.body.name,
        review: req.body.review,
        rating: req.body.rating
      }
      resolve(review);
    }
    else {
      reject(new Error("Error in create-movie promise utility"));
    }
  });
}

router.get('/view-reviews', (req, res) => {
  const movieJSON = req.query.movieJSON;
  const movie = JSON.parse(movieJSON);
  console.log("request made on /view-reviews");
  res.send(movieJSON);
  // res.redirect()


});

module.exports = router;
