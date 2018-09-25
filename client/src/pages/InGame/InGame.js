import React, { Component } from 'react';
import { Row, Container } from '../../components/Grid';
import './InGame.css';

class InGame extends Component {

  state = {
    ourScore: 0,
    thierScore: 0,
    roundNumber: 1
  };

  handleOurPlusOne = () => {
    this.setState({
      ourScore: this.state.ourScore + 1
    });
  };

  handleOurPlusFive = () => {
    this.setState({
      ourScore: this.state.ourScore + 5
    });
  };

  handleOurBunco = () => {
    this.setState({
      ourScore: this.state.ourScore + 21
    });
  }
  
  handleThemPlusOne = () => {
    this.setState({
      thierScore: this.state.thierScore + 1
    });
  };
  
  handleThemPlusFive = () => {
    this.setState({
      thierScore: this.state.thierScore + 5
    });
  };
  
  handleThemBunco = () => {
    this.setState({
      thierScore: this.state.thierScore + 21
    });
  };
  
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
              <p className="text-center mx-auto score">{this.state.ourScore}</p>
            </div>
            <div className="mx-auto col-xs-6">
              <p className="text-center mx-auto score">{this.state.thierScore}</p>
            </div>
          </Row>
          <div className="gameButtons">
            <Row>
              <div className="col-xs-6 mx-auto">
                <button className="btn UsPlusOne plusOne" onClick={this.handleOurPlusOne}>+1</button>
              </div>
              <div className="col-xs-6 mx-auto">
                <button className="btn themPlusOne plusOne" onClick={this.handleThemPlusOne}>+1</button>
              </div>
            </Row>
            <Row>
              <div className="col-xs-6 mx-auto">
                <button className="btn usPlusFive plusFive" onClick={this.handleOurPlusFive}>+5</button>
              </div>
              <div className="col-xs-6 mx-auto">
                <button className="btn themPlusFive plusFive" onClick={this.handleThemPlusFive}>+5</button>
              </div>
            </Row>
            <Row>
              <div className="col-xs-6 mx-auto">
                <button className="btn usBunco" onClick={this.handleOurBunco}>Bunco!</button>
              </div>
              <div className="col-xs-6 mx-auto">
                <button className="btn themBunco" onClick={this.handleThemBunco}>Bunco!</button>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    )
  }

}

export default InGame;