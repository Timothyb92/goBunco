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

  handleBackToProfile = () => {
    this.setState({
      returnClicked: true
    })
  }

  joinLobby = data => {
    API.joinLobby(data)
    .then(results => {
      console.log(results);
    })
  }
};

export default JoinRoom;