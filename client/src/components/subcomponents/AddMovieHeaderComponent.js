import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-grid-system';

class AddMovieHeaderComponent extends React.Component {
  render() {
    return (
      <div className="center-div">
        <Container>
          <Row>
            <Col lg={6} className="col-left">
              <h1>Flixreview</h1>
            </Col>
            <Col lg={6} className="col-right">
            <Link to="/">
              <button>Back</button>
            </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AddMovieHeaderComponent;
