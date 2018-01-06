import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MovieListItemComponent extends Component {
  constructor(props) {
    super(props);

    this.handleViewClick = this.handleViewClick.bind(this);
  }

  handleViewClick() {
    this.props.movieUtil(this.props.movie);
  }

  render() {
    return (
      <div className="found-div">
        <h3>{this.props.movie.movieTitle}</h3>
        <h3>{this.props.movie.numberOfReviews} Total Reviews</h3>
        <h3>Avg. Rating: {this.props.movie.avgRating}</h3>
          <Link to="/movie/view-review">
            <button className="frButton" onClick={this.handleViewClick}>View All Reviews</button>
          </Link>
      </div>
    )
  }
}

export default MovieListItemComponent;
