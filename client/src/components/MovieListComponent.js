import React, { Component } from 'react';
import { Container, Col, Row } from 'react-grid-system';

import MovieListItem from './subcomponents/MovieListItemComponent.js';

class MovieListComponent extends Component {
  render() {
    return (
      <div className="movieListComponent">
        <Container>
          <h1>Movies</h1>
          <ul>
            <MovieListItem movieTitle={this.props.movieTitle}/>
          </ul>
        </Container>
      </div>
    )
  }
}

export default MovieListComponent;
