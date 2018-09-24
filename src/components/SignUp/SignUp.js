import React, { Component } from 'react';
// import axios from 'axios';
import API from '../../utils/API';

class SignUp extends Component {

  state = {
    userName: '',
    password: ''
  };

  createUser = data => {
    API.createUser(data)
    .then(results => {
      console.log('Created user');
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.userName);
    console.log(this.state.password);
    this.createUser();
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
        <h2 className="mb-4">Sign Up</h2>
        <form>
          <div className="form-group">
            <input name="userName" className="form-control" type="text" placeholder="Username" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <input name="password" className="form-control" type="Password" placeholder="Password" onChange={this.handleInputChange} />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  };
};

export default SignUp;