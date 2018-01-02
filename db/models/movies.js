const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const movieSchema = new Schema({
  movieTitle: {
    type: String,
    required: true,
  },
  numberOfReviews: Number,
  avgRating: Number,
  reviews: [
    {
      name: String,
      review: String,
      rating: Number
    }
  ]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
