import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';

class MovieListItemComponent extends Component {
  render() {
    const movie = this.props.movie;
    console.log(this.props.movie);
    return (
      <div className="found-div">
        <h3>{this.props.movie.movieTitle}</h3>
        <h3>{this.props.movie.numberOfReviews} Total Reviews</h3>
        <h3>Avg. Rating: {this.props.movie.avgRating}</h3>
      </div>
    )
  }
}

export default MovieListItemComponent;
