import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Lobby.css';

class Lobby extends Component {

  state = {
    players: []
  };

  componentDidMount() {
    console.log(this.props.location.state)
    const playersArray = this.state.players.concat(`${this.props.location.state.ownerName}`)
    this.setState({
      players: playersArray
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                <h1>{this.props.location.state.lobbyName}</h1>
                <h2>Players In Lobby</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                <hr />
                <ul>
                  {this.state.players.map(players => (
                    <li key={players}>{players}</li>
                  ))}
                  {/* <li>JimiHendrix</li>
                  <li>BillMurray</li>
                  <li>KingTut</li>
                  <li>Ghandi</li>
                  <li>CaptainPlanet</li> */}
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