const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const Movies = require('../../db/models/movies.js');
const Utils = require('../utils/utils.js');

router.get('/load5', (req, res, next) => {
  console.log('GET Request made to api/');
  Movies.find({}).then((eachOne) => {
    Utils.storeMovie(eachOne);
    }
  });


});

router.post('/new-review', (req, res) => {
  console.log('POST Request made to api/movie');
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

module.exports = router;
