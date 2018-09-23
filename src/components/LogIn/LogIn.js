import React, { Component } from 'react';

class LogIn extends Component {
  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form>
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  };
};

export default LogIn;