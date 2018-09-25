import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import './HostRoom.css';

class HostRoom extends Component {
  state = {
    roomName: ''
  };

  createLobby = data => {
    API.createLobby(data)
    .then(results => console.log(results));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.createLobby(this.state.roomName);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
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
                  <input name="gameName" className="form-control" type="text" placeholder="Room Name" onChange={this.handleInputChange} />
                </div>
                <button className="btn hostRoomSubmitButton" onClick={this.handleSubmit}>Submit</button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HostRoom;