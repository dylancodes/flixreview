const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const DummyData = require('../../db/models/data.json');
const Movies = require('../../db/models/movies.js');
//const UtilsClass = require('../utils/utils.js');

//const Utils = new UtilsClass();

router.post('/submit-movie', (req, res) => {
  const movieReq = req.body.movieTitle;
  Movies.findOne({ movieTitle: movieReq }, (err, movie) => {
    if(err) {
      console.log(err);
      res.send("Server error processing movie");
    } else if(movie == null) {
      console.log(`${movieReq} does not exist in the database`);
      res.send(false);
    } else {
      console.log(`${movieReq} found in database. Result sent.`);
      res.send(movie);
    }
  });
});

module.exports = router;
