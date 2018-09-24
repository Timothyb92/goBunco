import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Lobby.css';

class Lobby extends Component {
  state = {
    players: []
  };

  render() {
    return (
      <div>
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
        </Container>
          <div className="container-fluid p-0 lobbyButtonContainerFluid">
            <Row>
              <Col size="sm-12">
                <div className="lobbyButtonContainer">
                  <button className="btn">Invite Player</button>
                  <button className="btn">Close Lobby</button>
                  <button className="btn">Start Game</button>
                </div>
              </Col>
            </Row>
          </div>
      </div>
    )
  }
}

export default Lobby;