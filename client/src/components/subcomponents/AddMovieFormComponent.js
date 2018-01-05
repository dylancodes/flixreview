import React from 'react';
import { Container } from 'react-grid-system';
import axios from 'axios';

class AddMovieFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      rating: '',
      name: '',
      review: '',
      responseFlag: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    const item = event.target.name;
    this.setState({ [item]: event.target.value });
  }

  handleInputSubmit(event) {
    event.preventDefault();
    axios.post('/api/create-new-movie', {
      movieTitle: this.state.title,
      reviews: [{
        name: this.state.name,
        review: this.state.review,
        rating: this.state.rating
      }]
    })
    .then((response) => {
      if(response.headers.errorFlag === '009') {
        console.log("Error Flag received from database in /AddMovieFormComponent.");
        this.setState({
          responseFlag: <div className="responseFlag">{response.data}</div>
        });
      }
      this.setState({
        title: '',
        rating: '',
        name: '',
        review: '',
        responseFlag: <div className="responseFlag">{response.data}</div>
      });
      console.log(response);
    })
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Add New Movie</h1>
          <form className="center-div" id="newMovie-Form">
            <input className="addInput" onChange={this.handleInputChange} type="text" name="title" value={this.state.title} placeholder="Movie Title..." />
            <input className="addInput" onChange={this.handleInputChange} type="text" name="rating" value={this.state.rating} placeholder="Rating (1-5)..."/>
            <input className="addInput" onChange={this.handleInputChange} type="text" name="name" value={this.state.name} placeholder="Your Name..."/>
            <textarea className="addInput-Text" name="review" onChange={this.handleInputChange} form="newMovie-Form" placeholder="Type your review here..." value={this.state.review} />
            <input className="addInput-Submit" onClick={this.handleInputSubmit} type="submit"  value="Submit"/>
          </form>
          {this.state.responseFlag}
        </Container>
      </div>
    )
  }
}

export default AddMovieFormComponent;
