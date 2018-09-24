import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';

class SignUp extends Component {

  state = {
    userName: '',
    password: '',
    id: ''
  };

  createUser = data => {
    API.createUser(data)
    .then(results => {
      this.setState({
        id: results.data._id
      })
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      userName: this.state.userName,
      password: this.state.password
    }
    this.createUser(newUser);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    if (this.state.id !=='') {
      return <Redirect to={`/users/${this.state.id}`} />
    }

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