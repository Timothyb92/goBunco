import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Welcome from './pages/Welcome';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Welcome} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
