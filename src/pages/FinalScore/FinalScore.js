import React, { Component } from 'react';
import { Row, Container } from '../../components/Grid';
import './FinalScore.css';

class FinalScore extends Component {
  state = {
    firstPlace: 'Tim and Hyunjin',
    secondPlace: 'Wes and Davina',
    thirdPlace: 'Jimi and Hendrix',
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="col-xs-12 text-cener mx-auto mt-5 mb-5">
              <h2>Your Bunco Winners!</h2>
            </div>
          </Row>
          <Row>
            <div className="col-xs-12 text-center mx-auto">
              <p className="winners">1st Place: {this.state.firstPlace}</p>
            </div>
          </Row>
          <Row>
            <div className="col-xs-12 text-center mx-auto">
              <p className="winners">2nd Place: {this.state.secondPlace}</p>
            </div>
          </Row>
          <Row>
            <div className="col-xs-12 text-center mx-auto">
              <p className="winners">3rd Place: {this.state.thirdPlace}</p>
            </div>
          </Row>
        </Container>
        <div className="container-fluid p-0 lobbyButtonContainer">
          <a href="/lobby"><button className="btn">Back To Lobby</button></a>
        </div>
      </div>
    )
  }
}

export default FinalScore;