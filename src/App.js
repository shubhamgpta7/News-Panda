import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  authur = "Shubham";
  render() {
    return (
      <div>
        <h>Welcome to NewsApp !!!-</h>{this.authur}
      </div>
    )
  }
}
