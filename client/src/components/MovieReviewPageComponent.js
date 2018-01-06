import React from 'react';

import Header from './subcomponents/AddMovieHeaderComponent.js';

class MovieReviewPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie,
      allReviews: <h1>Go Back and search for a movie first!</h1>
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
      this.state.movie.reviews.forEach(this.addReview);
    }
  }

  addReview(item) {
    console.log("add ran");
    console.log(item);
    this.setState({
      allReviews: <p>{item.review}</p>
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
        {this.state.allReviews}
        </div>
      </div>
    )
  }
}

export default MovieReviewPageComponent;
