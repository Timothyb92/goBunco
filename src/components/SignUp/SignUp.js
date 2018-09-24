import React, { Component } from 'react';
// import axios from 'axios';

class SignUp extends Component {

  state = {
    userName: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(`${name}: ${value}`);
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
            <input name="userName" className="form-control" type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <input name="password" className="form-control" type="Password" placeholder="Password" />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  };
};

export default SignUp;