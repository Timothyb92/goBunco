import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Home.css';

class Home extends Component {
  state = {
    userName: '',
    password: ''
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="xs-12">
          <h1>Testing!</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home;