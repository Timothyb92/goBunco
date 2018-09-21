import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Home />
      </div>
    );
  }
}

export default App;
