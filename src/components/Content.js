import React, { Component } from 'react';
import Board from './Board';
import Cart from './Cart';

class Content extends Component {
  render() {
    return (
        <p className="App-intro">
          <main>
          <Board />
          </main>
        </p>
    );
  }
}

export default Content;
