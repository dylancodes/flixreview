import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import MovieInput from './subcomponents/MovieInputComponent.js';

class Top extends Component {

  render() {
    return (
        <div className="topComponent">
          <Container>
              <h1>Flixreview</h1>
              <h2>Rate & Review Movies on Netflix</h2>
              <MovieInput wrapperFunction={this.props.wrapperFunction}/>
          </Container>
        </div>

    )
  }
}

export default Top;
