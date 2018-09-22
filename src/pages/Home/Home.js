import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Home.css';
import dice from './images/dice.png';
import Footer from '../../components/Footer';

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
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;