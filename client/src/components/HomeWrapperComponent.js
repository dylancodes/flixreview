import React, { Component } from 'react';

import Top from './TopComponent.js'
import MovieList from './MovieListComponent';
import Footer from './subcomponents/FooterComponent.js';

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
        <MovieList movieUtil={this.props.movieUtil} movieTitle={this.state.input}/>
        <Footer />
      </div>
    );
  }
}

export default HomeWrapperComponent;
