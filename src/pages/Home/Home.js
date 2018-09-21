import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Home.css';
import dice from './images/dices.png';

class Home extends Component {
  state = {
    userName: '',
    password: ''
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            <div className="text-center">
              <h1>Go Bunco</h1>
              <img src={dice} />
            </div>
          </Col>
        </Row>
        <div className="homeButtons">
          <Row>
            <Col size="sm-12">
                <div className="text-center">
                  <button className="btn">
                    Log In
                  </button>
                </div>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                  <button className="btn">
                    Sign Up
                  </button>
              </div>
            </Col>
          </Row>
        </div>
            <footer className="text-center"><small>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></small></footer>
      </Container>
    )
  }
}

export default Home;