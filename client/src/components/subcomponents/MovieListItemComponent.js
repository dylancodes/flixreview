import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';
import axios from 'axios';

class MovieListItemComponent extends Component {
  constructor(props) {
    super(props);

    this.handleViewClick = this.handleViewClick.bind(this);
  }

  handleViewClick() {
    const movieJSON = JSON.stringify(this.props.movie);
    axios.get(`/api/view-reviews?movieJSON=${movieJSON}`)
    .then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="found-div">
        <h3>{this.props.movie.movieTitle}</h3>
        <h3>{this.props.movie.numberOfReviews} Total Reviews</h3>
        <h3>Avg. Rating: {this.props.movie.avgRating}</h3>
          <button className="frButton" onClick={this.handleViewClick}>View All Reviews</button>
      </div>
    )
  }
}

export default MovieListItemComponent;
