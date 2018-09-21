import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";

class Welcome extends Component {

  render() {
    return (
    <Container>
      <Row>
        <Col size="sm-12">
          <div className="text-center">
            <img src="https://education.fsu.edu/wp-content/uploads/2018/07/placeholder.png" />
          </div>
        </Col>
      </Row>
    </Container>
    )
  }
};

export default Welcome;