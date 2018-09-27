import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './StartRound.css';

class StartRound extends Component {

  state = {
    round: 1
  };

  componentDidMount() {
    console.log(this.props.location.state)
  }

  renderStartButtonIfOwner = owner => {
    if(owner) {
      return <button className="btn">Start!</button>
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="sm-12">
              <div className="text-center startRoundText mt-5">
                <p>Round</p>
                <p>{this.state.round}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="mt-5">
          <Row>
            <Col size="sm-12">
              <a href="/play">
                {this.renderStartButtonIfOwner(this.props.location.state.owner)}
              </a>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default StartRound;