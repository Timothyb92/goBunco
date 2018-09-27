import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Lobby.css';
import io from 'socket.io-client';
import Welcome from '../Welcome';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';



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

  listenForJoin = socket.on(this.props.location.state.lobbyName, data => {
    console.log(this.state.players);
    this.setState({
      players: data
    })
    this.updatePlayerList();
    console.log(this.state.players)
  })

  listenForClose = socket.on('close lobby', () => {
    this.setState({
      players: [],
      leaveClicked: true
    })
  })

  renderCloseOrLeaveButton = owner => {
    if (owner) {
      return (
        <div>
          <button className="btn" onClick={this.closeLobby}>Close Lobby</button>
          <button className="btn" onClick={this.startGame}>Start Game</button>
        </div>
      )
    } else {
      return (
        <button className="btn" onClick={this.leaveLobby}>Leave Lobby</button>
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

  leaveLobby = () => {
    this.setState({
      leaveClicked: true
    });
    socket.emit('leave lobby');
  }

  closeLobby = () => {
    this.setState({
      closeClicked: true
    });
    socket.emit('close lobby');
  }

  startGame = () => {
    // console.log(this.state.players)
    // console.log('Start game clicked')
    const playerData = {
      lobbyId: this.props.location.state.lobbyId,
      players: this.state.players
    }
    this.updateDB(playerData);
  }

  updateDB = data => {
    API.updatePlayers(data)
      .then(results => console.log(results));
  }

  state = {
    players: [],
    leaveClicked: false,
    closeClicked: false
  };

  render() {

    if (this.state.leaveClicked) {
      return <Redirect to={`/users/${this.props.location.state.userId}`} />
    }
    else if (this.state.closeClicked) {
      return <Redirect to={`/users/${this.props.location.state.owner}`} />
    }

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