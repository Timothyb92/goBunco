import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Lobby from './pages/Lobby';
import StartRound from './pages/StartRound';
import InGame from './pages/InGame';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Welcome} />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/start" component={StartRound} />
          <Route exact path="/play" component={InGame} />
        </Switch>
      </Router>
    );
  }
}

export default App;
