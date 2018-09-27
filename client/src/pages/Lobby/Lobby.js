import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './Lobby.css';
import io from 'socket.io-client';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';

let socket = io();
console.log(this)

class Lobby extends Component {

  componentDidMount() {
    // console.log(socket)
    // console.log(this.props.location.state)
    const playerData = {
      userName: this.props.location.state.userName,
      room: this.props.location.state.lobbyId,
      players: this.state.players,
      lobbyName: this.props.location.state.lobbyName
    }
    socket.emit('room', playerData);
  }

  listenForJoin = socket.on(this.props.location.state.lobbyName, data => {
    // console.log(this.state.players);
    console.log('Receiving emit from server');
    this.setState({
      players: data
    })
    this.updatePlayerList();
    console.log(this.state.players)
    this.render();
  })

  listenForClose = socket.on('close lobby', () => {
    this.setState({
      players: [],
      leaveClicked: true
    })
  })

  listenForGameStart = socket.on('start game', () => {
    this.setState({
      startClicked: true
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
    socket.emit('start game')
    // this.setState({
    //   startClicked: true
    // })
  }

  updateDB = data => {
    API.updatePlayers(data)
      .then(results => console.log(results));
  }

  state = {
    players: [],
    leaveClicked: false,
    closeClicked: false,
    startClicked: false
  };

  render() {

    if (this.state.leaveClicked) {
      return <Redirect to={`/users/${this.props.location.state.userId}`} />
    }
    else if (this.state.closeClicked) {
      return <Redirect to={`/users/${this.props.location.state.owner}`} />
    }
    else if (this.state.startClicked) {
      return <Redirect to={{
        pathname: `/start/${this.props.location.state.lobbyId}`,
        state: {
          owner: this.props.location.state.ownerName,
          lobbyId: this.props.location.state.lobbyId
        }
      }} />
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