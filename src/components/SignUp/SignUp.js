import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="mt-5">
        <h2 className="mb-4">Sign Up</h2>
        <form>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <input className="form-control" type="Password" placeholder="Password" />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  };
};

export default SignUp;