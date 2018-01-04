import React, { Component } from 'react';

import Header from './subcomponents/AddMovieHeaderComponent.js';
import Form from './subcomponents/AddMovieFormComponent.js';
import Footer from './subcomponents/FooterComponent.js';

class AddMovieComponent extends Component {

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default AddMovieComponent;
