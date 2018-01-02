import React, { Component } from 'react';
import axios from 'axios';

class MovieInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: ''
    }
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
  }

  handleMovieChange(event) {
    this.setState({movieTitle: event.target.value})
  }

  handleMovieSubmit(event) {
    event.preventDefault
    axios.post('/api/add-movie', {movie: this.movieTitle})
    .then((response) => {
      console.log(response);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleMovieSubmit}>
          <input onChange={this.handleMovieChange} value={this.state.movieTitle} name="movie" className="movieInputComponent" type="text" placeholder="Insert a Movie Title..."/>
          <br/><br/>
          <input className="movieInputComponent-Submit" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default MovieInputComponent;
