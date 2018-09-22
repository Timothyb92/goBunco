import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Welcome.css'
import Footer from '../../components/Footer';

class Welcome extends Component {

  render() {
    return (
    <div>
      <Container>
        <Row>
          <Col size="sm-12">
            <div className="text-center">
              <img src="https://education.fsu.edu/wp-content/uploads/2018/07/placeholder.png" className="profileImg img-fluid" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="text-center welcomeMessage">
              <p>Welcome</p>
              <p>User</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="buttonContainer mt-5">
        <Row>
          <Col size="sm-12">
              <div className="text-center">
                <a href="/lobby">
                  <button className="btn">
                    Host Game
                  </button>
                </a>
              </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="text-center">
                <a href="/lobby">
                  <button className="btn">
                    Join Game
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
};

export default Welcome;