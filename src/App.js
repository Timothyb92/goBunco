import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
