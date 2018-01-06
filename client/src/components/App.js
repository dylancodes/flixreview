import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import HomeWrapperComponent from './HomeWrapperComponent.js';
import AddMovieComponent from './AddMovieComponent.js';
import MovieReviewPageComponent from './MovieReviewPageComponent.js';

import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: null
    }
    this.movieUtil = this.movieUtil.bind(this);
  }

  movieUtil(currentMovie) {
    this.setState({ movie: currentMovie });
  }

  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path="/" render={() => <HomeWrapperComponent movieUtil={this.movieUtil} />} />
          <Route path="/add-new-movie" component={AddMovieComponent} />
          <Route path="/movie/view-review" render={() => <MovieReviewPageComponent movie={this.state.movie} />} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
