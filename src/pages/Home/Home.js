import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Home.css';
import dice from './images/dice.png';
import Footer from '../../components/Footer';
import LogIn from '../../components/LogIn';
import Portal from '../../components/Portal';

class Home extends Component {
  state = {
    userName: '',
    password: '',
    logInClicked: false,
    signUpClicked: false
  };

  toggleLogIn = () => {
    this.setState({
      logInClicked: !this.state.logInClicked
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                <h1>Go Bunco</h1>
                {(!this.state.logInClicked && !this.state.signUpClicked) && <img src={dice} />}
                {this.state.logInClicked && (<LogIn />)}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="buttonContainer mt-5">
          <Row>
            <Col size="sm-12">
                <div className="text-center">
                  <a href="#">
                    <button className="btn" onClick={this.toggleLogIn}>
                      Log In
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