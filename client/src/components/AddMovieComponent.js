import React, { Component } from 'react';

import Header from './subcomponents/AddMovieHeaderComponent.js';
import Form from './subcomponents/AddMovieFormComponent.js';

class AddMovieComponent extends Component {

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default AddMovieComponent;
