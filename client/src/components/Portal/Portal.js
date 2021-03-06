import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Portal extends Component {
  constructor(children) {
    super(children);
    this.el = document.createElement('div');
  };

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const children = this.props;
    return ReactDOM.createPortal(children, modalRoot);
  }
}

export default Portal;
