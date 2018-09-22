import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './RoundEnd.css';

class RoundEnd extends Component {
  state = {
    round: 1,
    winner1: 'Tim',
    winner2: 'Hyunjin',
    playersStaying: ['Charles', 'Sannon', 'Davina', 'Wesley'],
    playersMoving: ['Iysha', 'Josh', 'Jimi', 'Bill']
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="col-xs-12 text-center mx-auto">
                <p class="roundNumber">Round {this.state.round}</p>
                <p className="winnerAnnouncement">Winners</p>
            </div>
          </Row>
          <Row>
            <div className="col-xs-6 mx-auto text-center">
              <p className="winners">{this.state.winner1}</p>
            </div>
            <div className="col-xs-6 mx-auto text-center">
              <p className="winners">{this.state.winner2}</p>
            </div>
          </Row>
          <Row>
            <div className="col-xs-6 mx-auto text-center">
              <div className="col-xs-12">
                <p className="playersStaying">Players Staying</p>
                {this.state.playersStaying.map(each => {
                  return (
                    <div>
                      <p key={each} className="playerName">{each}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-xs-6 mx-auto text-center">
              <div className="col-xs-12">
                <p className="playersMoving">Players Moving</p>
                {this.state.playersMoving.map(each => {
                  return (
                    <div>
                      <p className="playerName">{each}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Row>
        </Container>
        <div className="container-fluid p-0 mt-5">
          <button className="btn">Next Round!</button>
        </div>
      </div>
    )
  }
}

export default RoundEnd;