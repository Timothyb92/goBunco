import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Lobby.css';

class Lobby extends Component {
  state = {
    players: []
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            <div className="text-center">
              <h1>Lobby Name</h1>
              <h2>Players In Lobby</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="text-center">
              <hr />
              <ul>
                <li>JimiHendrix</li>
                <li>BillMurray</li>
                <li>KingTut</li>
                <li>Ghandi</li>
                <li>CaptainPlanet</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="text-center lobbyButtonContainer">
              <button className="btn">Invite Player</button>
              <button className="btn">Close Lobby</button>
              <button className="btn">Start Game</button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Lobby;