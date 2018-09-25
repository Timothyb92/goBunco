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
import HostRoom from './pages/HostGame';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Welcome} />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/start" component={StartRound} />
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
