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
    // this.socket.on('connect', () => console.log('Connected to socket at Lobby.js'));
    socket.emit('room', playerData);

    socket.on('room', data => {
      console.log(data);
      this.setState({
        players: data
      })
      // if (this.state.players.indexOf(data) === -1) {
      //   console.log('if condition met')
      //   const playersArray = this.state.players;
      //   playersArray.push(data)
      //   this.setState({
      //     players: playersArray
      //   })
      // };
      console.log(this.state);
    })
  }

  state = {
    players: []
  };

  // componentDidMount() {
  //   console.log(this.props.location.state)
  //   const playersArray = this.state.players.concat(`${this.props.location.state.ownerName}`)
  //   this.setState({
  //     players: playersArray
  //   });
  // }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="sm-12">
              <div className="text-center">
                {/* <h1>{this.props.location.state.lobbyName}</h1> */}
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