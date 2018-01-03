import React, { Component } from 'react';
import { Container, Col, Row } from 'react-grid-system';
import axios from 'axios';

import MovieListItem from './subcomponents/MovieListItemComponent.js';

class MovieListComponent extends Component {
  constructor() {
    super();
    this.state = {
      errorReturned: false,
      movieDoesNotExist: false,
      movie: null,
      line: [<div key={1} className="missing-div">
            <h3 key={2}>Type a movie title in the search bar above to get started!</h3>
            </div>]
    }
    this.implementItem = this.implementItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.movieTitle !== nextProps.movieTitle) {
      axios.post('/api/submit-movie', {movieTitle: nextProps.movieTitle})
      .then((response) => {
        if(response.data === "Server error processing movie") {
          this.setState({ errorReturned: true });
        } else if(response.data === false) {
          this.setState({missingTitle : nextProps.movieTitle});
          this.setState({ movieDoesNotExist: true });
        } else {
          this.setState({ movieDoesNotExist: false });
          this.setState({ movie: response.data });
        }
      })
      .then(() => {
        this.setState({ line: this.implementItem()});
      });
    }
  }

  implementItem() {
    if(this.state.errorReturned) {
      return ([
        <div key={1} className="missing-div">
          <h3 key={2}>Ahhh, shitttt. There was an error on the server. Try again later bro.</h3>
        </div>
      ]);
    } else if(this.state.movieDoesNotExist) {
      return ([
        <div key={1} className="missing-div">
          <h3 key={2}>"{this.state.missingTitle}" does not exist in the flixreview archive. Would you like to add it?</h3>
              <button key={3}>Yes</button>
              <button key={4}>No</button>
        </div>
      ]);
    } else if(this.state.movie != null){
      return <MovieListItem movie={this.state.movie}/>;
    } else {
      return ([
        <div key={1} className="missing-div">
          <h3 key={2}>Search for a movie first!</h3>
        </div>
      ]);
    }
  }

  render() {
    return (
      <div className="movieListComponent">
        <Container>
          <h1>Movies</h1>
          {this.state.line}
        </Container>
      </div>
    )
  }
}

export default MovieListComponent;
