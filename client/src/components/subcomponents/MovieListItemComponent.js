import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';

class MovieListItemComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: "",
      movieDescription: "",
    }
  }

  render() {
    return (
      <li>Test Item</li>
    )
  }
}

export default MovieListItemComponent;
