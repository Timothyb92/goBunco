import React, { Component } from 'react';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import './JoinRoom.css';
import Welcome from '../Welcome';
import { Redirect } from 'react-router-dom';

class JoinRoom extends Component {
  state = {
    roomName: '',
    returnClicked: false,
    userId: this.props.userId,
    userName: this.props.userName,
    lobbyId: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleBackToProfile = () => {
    this.setState({
      returnClicked: true
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const lobbyData = {
      lobbyName: this.state.roomName,
      userName: this.state.userName
    };
    this.joinLobby(lobbyData)
  }

  joinLobby = data => {
    console.log(data)
    API.joinLobby(data)
    .then(results => {
      console.log(results);
    });
  };

  render() {
    if (this.state.returnClicked) {
      return <Welcome />
    }

    return (
      <div className="mt-5 text-center">
        <Container>
          <Row>
            <Col size="sm-12">
              <h2 className="mb-4">Join Game</h2>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <form>
                <div className="form-group">
                  <input name="roomName" className="form-control" type="text" placeholder="Room Name" onChange={this.handleInputChange} />
                </div>
                <button className="btn JoinRoomSubmitButton" onClick={this.handleSubmit}>Submit</button>
              </form>
              <button className="btn backToProfile>" onClick={this.handleBackToProfile}>Back To Profile</button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

};

export default JoinRoom;