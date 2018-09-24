import React, { Component } from 'react';
import API from '../../utils/API';

class LogIn extends Component {

  state = {
    userName: '',
    password: ''
  };

  verifyUser = data => {
    API.verifyUser(data)
    .then(results => {
      console.log(results);
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.userName);
    // console.log(this.state.password);
    const user = {
      userName: this.state.userName,
      password: this.state.password
    }
    console.log(user);
    this.verifyUser(user);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(`${name}: ${value}`);
    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (
      <div className="mt-5">
        <h2 className="mb-4">Log In</h2>
        <form>
          <div className="form-group">
            <input name="userName" className="form-control" type="text" placeholder="Username" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <input name="password" className="form-control" type="password" placeholder="Password" onChange={this.handleInputChange} />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  };
};

export default LogIn;