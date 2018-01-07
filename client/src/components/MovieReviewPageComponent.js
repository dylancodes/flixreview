import React from 'react';
import { Container } from 'react-grid-system';
import Header from './subcomponents/AddMovieHeaderComponent.js';

class MovieReviewPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.mainReviews = [
      <h1>Go Back and search for a movie first!</h1>
    ];

    this.state = {
      movie: this.props.movie,
      allReviews: this.mainReviews
    }
    this.displayReviews = this.displayReviews.bind(this);
    this.addReview = this.addReview.bind(this);
  }

  componentDidMount() {
    this.displayReviews();
  }

  displayReviews() {
    if(this.state.movie) {
      console.log("display ran");
      this.mainReviews = [];
      this.state.movie.reviews.forEach(this.addReview);
    }
  }

  addReview(item) {
    console.log("add ran");
    console.log(item);
    this.mainReviews.push(
      <div className="individualReview">
        <h1>"{item.review}"</h1>
        <h2>Rating: {item.rating}</h2>
      </div>
    );
    this.setState({
      allReviews: this.mainReviews
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
        {
          this.state.movie ? <h1>{this.state.movie.movieTitle}</h1> : ''
        }
        <div className="center-div">
        {this.state.allReviews}
        </div>
        </Container>
      </div>
    )
  }
}

export default MovieReviewPageComponent;
