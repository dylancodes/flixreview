import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import HomeWrapperComponent from './HomeWrapperComponent.js';
import AddMovieComponent from './AddMovieComponent.js';

import '../App.css';

class App extends Component {

  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path="/" component={HomeWrapperComponent} />
          <Route path="/add-new-movie" component={AddMovieComponent} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
