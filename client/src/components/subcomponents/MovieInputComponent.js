import React, { Component } from 'react';

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
    event.preventDefault();
    this.props.wrapperFunction(this.state.movieTitle);
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleMovieChange} value={this.state.movieTitle} name="movie" className="movieInputComponent" type="text" placeholder="Insert a Movie Title..."/>
          <br/><br/>
          <input className="movieInputComponent-Submit" onClick={this.handleMovieSubmit} type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default MovieInputComponent;
