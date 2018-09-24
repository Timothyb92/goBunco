import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Home.css';
import dice from './images/dice.png';
import Footer from '../../components/Footer';
import LogIn from '../../components/LogIn';
// import Portal from '../../components/Portal';
import SignUp from '../../components/SignUp';

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
    });
    if (this.state.signUpClicked) {
      this.setState({
        signUpClicked: false
      });
    };
  };

  toggleSignUp = () => {
    this.setState({
      signUpClicked: !this.state.signUpClicked
    });
    if (this.state.logInClicked) {
      this.setState({
        logInClicked: false
      });
    };
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                <h1>Go Bunco</h1>
                {(!this.state.logInClicked && !this.state.signUpClicked) && <img src={dice} alt="dice" />}
                {this.state.logInClicked && (<LogIn />)}
                {this.state.signUpClicked && (<SignUp />)}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="buttonContainer mt-5">
          <Row>
            <Col size="sm-12">
                <div className="text-center">
                  <button className="btn" onClick={this.toggleLogIn}>
                    Log In
                  </button>
                </div>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                  <button className="btn" onClick={this.toggleSignUp}>
                    Sign Up
                  </button>
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