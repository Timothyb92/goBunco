import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Lobby from './pages/Lobby';
import StartRound from './pages/StartRound';
import InGame from './pages/InGame';
import RoundEnd from './pages/RoundEnd';
import FinalScore from './pages/FinalScore';
import HostRoom from './pages/HostRoom';
// import io from 'socket.io-client';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.socket = io()
  // }

  // componentDidMount() {
  //   this.socket.on('connect', () => console.log('Connected to socket at App.js'));
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Welcome} />
          <Route exact path="/lobby/:lobbyId" component={Lobby} />
          <Route path="/start" component={StartRound} />
          <Route exact path="/play" component={InGame} />
          <Route exact path="/round-end" component={RoundEnd} />
          <Route exact path="/final" component={FinalScore} />
          <Route exact path="/host" component={HostRoom} />
        </Switch>
      </Router>
    );
  }
}

export default App;
