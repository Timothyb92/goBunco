import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Home.css';
import dice from './images/dice.png';

class Home extends Component {
  state = {
    userName: '',
    password: ''
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                <h1>Go Bunco</h1>
                <img src={dice} />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="buttonContainer mt-5">
          <Row>
            <Col size="sm-12">
                <div className="text-center">
                  <a href="/profile">
                    <button className="btn">
                      Log In
                    </button>
                  </a>
                </div>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                  <a href="/profile">
                    <button className="btn">
                      Sign Up
                    </button>
                  </a>
              </div>
            </Col>
          </Row>
            <footer className="text-center fixed-bottom"><small>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></small></footer>
        </div>
      </div>
    )
  }
}

export default Home;