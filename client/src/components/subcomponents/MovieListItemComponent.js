import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';

class MovieListItemComponent extends Component {
  render() {
    return (
      <li>{this.props.movieTitle}</li>
    )
  }
}

export default MovieListItemComponent;
