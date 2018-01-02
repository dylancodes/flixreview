const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const DummyData = require('../../db/models/data.json');
const Movies = require('../../db/models/movies.js');
//const UtilsClass = require('../utils/utils.js');

//const Utils = new UtilsClass();

router.get('/fill-on-load', (req, res) => {
  console.log('GET Request made to api/');
  /*Movies.find({}).then((eachOne) => {
    Utils.storeMovieArray(eachOne)
    .then((fulfilled) => {
    })
  });*/
  res.json(DummyData);
});

router.post('/new-review', (req, res) => {
  console.log('POST Request made to api/new-review');
  Movies.create({
    movieTitle: req.body.movieTitle,
    numberOfReviews: 4,
    avgRating: 3.9,
    reviews: [
      {
        name: "Dylan",
        review: "10/10 recommend",
        rating: 5
      }
    ]
  }, (err, movie) => {
    if(err) console.log(err);
    res.json(movie.movieTitle + "created");
  });
});

router.post('/add-movie', (req, res) => {
  console.log('POST Request made to api/add-movie');
  let movie = req.body.movie;
  console.log(req.body.movie);
  movie += " has been added to the movie list";
  res.send(movie);
});

module.exports = router;
