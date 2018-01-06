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
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.movie !== nextProps.movie) {
      this.setState({ movie: nextProps.movie });
    }
  }

  displayReviews() {
    if(this.state.movie) {
      this.state.movie.reviews.forEach(addReview());
    }
  }

  addReview(item) {
    this.setState({
      allReviews: <p>item.review</p>
    })
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
