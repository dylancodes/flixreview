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
      review: ''
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
      console.log(response.data);
    })
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Add New Movie</h1>
          <form>
            <input className="addInput" onChange={this.handleInputChange} type="text" name="title" value={this.state.title} placeholder="Movie Title..." />
            <input className="addInput" onChange={this.handleInputChange} type="text" name="rating" value={this.state.rating} placeholder="Rating..."/>
            <input className="addInput" onChange={this.handleInputChange} type="text" name="name" value={this.state.name} placeholder="Your Name..."/>
            <input className="addInput" onChange={this.handleInputChange} type="textarea" name="review" value={this.state.review} placeholder="Type your review here...."/>
            <input className="addInput" onClick={this.handleInputSubmit} type="submit"  value="Submit"/>
          </form>
        </Container>
      </div>
    )
  }
}

export default AddMovieFormComponent;
