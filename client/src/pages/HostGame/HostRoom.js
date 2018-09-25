import React, { Component } from 'react';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import './HostRoom.css';
import Welcome from '../Welcome';

class HostRoom extends Component {
  state = {
    roomName: '',
    returnClicked: false,
    userId: this.props.userId,
    userName: this.props.userName
  };

  componentDidMount() {
    // console.log(this.state);
  }

  handleBackToProfile = () => {
    this.setState({
      returnClicked: true
    })
  }

  createLobby = data => {
    console.log(data)
    API.createLobby(data)
    .then(results => console.log(results));
  };

  handleSubmit = event => {
    event.preventDefault();
    const lobbyData = {
      lobbyName: this.state.roomName,
      lobbyOwner: this.state.userName
    };
    // console.log(lobbyData);
    this.createLobby(lobbyData);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    if (this.state.returnClicked) {
      return <Welcome />
    }

    return (
      <div className="mt-5 text-center">
        <Container>
          <Row>
            <Col size="sm-12">
              <h2 className="mb-4">Host Game</h2>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <form>
                <div className="form-group">
                  <input name="roomName" className="form-control" type="text" placeholder="Room Name" onChange={this.handleInputChange} />
                </div>
                <button className="btn hostRoomSubmitButton" onClick={this.handleSubmit}>Submit</button>
              </form>
              <button className="btn backToProfile>" onClick={this.handleBackToProfile}>Back To Profile</button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HostRoom;