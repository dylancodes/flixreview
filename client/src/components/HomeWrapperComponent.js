import React, { Component } from 'react';

import Top from './TopComponent.js'
import MovieList from './MovieListComponent';

class HomeWrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.wrapperFunction = this.wrapperFunction.bind(this);
  }

  wrapperFunction(inputData) {
    this.setState({ input: inputData });
  }

  render() {
    return (
      <div>
        <Top wrapperFunction={this.wrapperFunction}/>
        <MovieList movieTitle={this.state.input}/>
      </div>
    );
  }
}

export default HomeWrapperComponent;
