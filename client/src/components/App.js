import React, { Component } from 'react';

import Top from './TopComponent.js'
import MovieList from './MovieListComponent';

import '../App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Top />
      <MovieList />
    </div>
    );
  }
}

export default App;
