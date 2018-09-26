import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';

class LogIn extends Component {

  state = {
    userName: '',
    password: '',
    id: ''
  };


  verifyUser = data => {
    // console.log(data);
    API.verifyUser(data)
    .then(results => {
      this.setState({
        id: results.data
      })
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      userName: this.state.userName,
      password: this.state.password
    }
    this.verifyUser(user);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  
  render() {
    if (this.state.id !== '') {
      return <Redirect to={`/users/${this.state.id}`} />
    }

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