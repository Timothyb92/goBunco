import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Welcome.css'

class Welcome extends Component {

  render() {
    return (
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
      <div className="buttonContainer">
          <Row>
            <Col size="sm-12">
                <div className="text-center">
                  <a href="#">
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
                  <a href="#">
                    <button className="btn">
                      Join Game
                    </button>
                  </a>
              </div>
            </Col>
          </Row>
        </div>
    </Container>
    )
  }
};

export default Welcome;