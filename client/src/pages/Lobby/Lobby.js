import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Lobby.css';
import io from 'socket.io-client';
const socket = io();

class Lobby extends Component {

  componentDidMount() {
    console.log(this.props.location.state)
    const playerData = {
      userName: this.props.location.state.userName,
      room: this.props.location.state.lobbyId,
      players: this.state.players,
      lobbyName: this.props.location.state.lobbyName
    }
    socket.emit('room', playerData);

  }
  listen = socket.on(this.props.location.state.lobbyName, data => {
    console.log(this.state.players);
    this.setState({
      players: data
    })
    this.updatePlayerList();
    console.log(this.state.players)
  })

  renderCloseOrLeaveButton = owner => {
    if (owner) {
      return (
        <div>
          <button className="btn">Close Lobby</button>
          <button className="btn">Start Game</button>
        </div>
      )
    } else {
      return (
        <button className="btn">Leave Lobby</button>
      )
    }
  }
  
  updatePlayerList = () => {
    return (
      <ul>
        {this.state.players.map(player => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    )
  }

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
                <h1>{this.props.location.state.lobbyName}</h1>
                <h2>Players In Lobby</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                <hr />
                {this.updatePlayerList()}
              </div>
            </Col>
          </Row>
        </Container>
          <div className="container-fluid p-0 lobbyButtonContainerFluid">
            <Row>
              <Col size="sm-12">
                <div className="lobbyButtonContainer">
                  {this.renderCloseOrLeaveButton(this.props.location.state.ownerName)}
                </div>
              </Col>
            </Row>
          </div>
      </div>
    )
  }
}

export default Lobby;