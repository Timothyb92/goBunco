import React, { Component } from 'react';
import { Row, Container } from '../../components/Grid';
import './InGame.css';

class InGame extends Component {

  render() {
    return (
      <div id="inGameParent text-center">
        <Container>
          <Row>
            <div className="col-xs-6 mx-auto">
              <p className="usHeader text-center inGameHeader">Us</p>
            </div>
            <div className="col-xs-6 mx-auto">
              <p className="themHeader text-center inGameHeader">Them</p>
            </div>
            
          </Row>
          <Row>
            <div className="mx-auto col-xs-6">
              <p className="text-center mx-auto score">14</p>
            </div>
            <div className="mx-auto col-xs-6">
              <p className="text-center mx-auto score">9</p>
            </div>
          </Row>
          <div className="gameButtons">
            <Row>
              <div className="col-xs-6 mx-auto">
                <button className="btn UsPlusOne plusOne">+1</button>
              </div>
              <div className="col-xs-6 mx-auto">
                <button className="btn themPlusOne plusOne">+1</button>
              </div>
            </Row>
            <Row>
              <div className="col-xs-6 mx-auto">
                <button className="btn usPlusFive plusFive">+5</button>
              </div>
              <div className="col-xs-6 mx-auto">
                <button className="btn themPlusFive plusFive">+5</button>
              </div>
            </Row>
            <Row>
              <div className="col-xs-6 mx-auto">
                <button className="btn usBunco">Bunco!</button>
              </div>
              <div className="col-xs-6 mx-auto">
                <button className="btn themBunco">Bunco!</button>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    )
  }

}

export default InGame;