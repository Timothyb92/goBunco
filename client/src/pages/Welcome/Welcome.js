import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Welcome.css'
import Footer from '../../components/Footer';
import API from '../../utils/API';
import HostRoom from '../HostRoom';

class Welcome extends Component {
  state = {
    img: 'https://education.fsu.edu/wp-content/uploads/2018/07/placeholder.png',
    userName: '',
    userId: '',
    hostClicked: false,
    joinClicked: false
  }
  
  componentDidMount() {
    const thisId = document.location.pathname.slice(7);
    API.getUserInfo(thisId)
    .then(getRes => {
      console.log(getRes);
      this.setState({
        userName: getRes.data.userName,
        userId: getRes.data._id
      });
      console.log(this.state)
    })
  };

  handleHostClick = () => {
    this.setState({
      hostClicked: true
    });
  };
  
  render() {
    if (this.state.hostClicked) {
      return <HostRoom userId={document.location.pathname.slice(7)} userName={this.state.userName} />
    }

    return (
    <div>
      <Container>
        <Row>
          <Col size="sm-12">
            <div className="text-center">
              <img src={this.state.img} alt="User" className="profileImg" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="text-center welcomeMessage">
              <p>Welcome</p>
              <p>{this.state.userName}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="buttonContainer mt-5">
        <Row>
          <Col size="sm-12">
              <div className="text-center">
                <button className="btn" onClick={this.handleHostClick}>
                  Host Game
                </button>
              </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="text-center">
                <button className="btn">
                  Join Game
                </button>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
    )
  }
};

export default Welcome;