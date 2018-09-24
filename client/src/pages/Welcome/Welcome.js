import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import './Welcome.css'
import Footer from '../../components/Footer';
import API from '../../utils/API';

class Welcome extends Component {
  state = {
    img: 'https://education.fsu.edu/wp-content/uploads/2018/07/placeholder.png',
    userName: 'Tim'
  }

  componentDidMount() {
    const thisId = document.location.pathname.slice(7);
    // console.log(thisId);
    API.getUserInfo(thisId)
      .then(results => {
        console.log(results);
      })
  }


  render() {
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
                <a href="/lobby">
                  <button className="btn">
                    Host Game
                  </button>
                </a>
              </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="text-center">
                <a href="/lobby">
                  <button className="btn">
                    Join Game
                  </button>
                </a>
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