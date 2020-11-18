import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state={
    username: 'Super hero'
  }

  userChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
      return (
        <div className="App">
          <ol>
            <li>flkjdsklfjsklfjkls</li>
            <li>flkjdsklfjsklfjkls</li>
            <li>flkjdsklfjsklfjkls</li>
            <li>flkjdsklfjsklfjkls</li>
            <li>flkjdsklfjsklfjkls</li>
            <li>flkjdsklfjsklfjkls</li>
          </ol>
          <UserInput changed={this.userChangedHandler}
            currentName={this.state.username}
          />
          <UserOutput userName={this.state.username} />
          <UserOutput userName={this.state.username} />
          <UserOutput userName="Tu" />
        </div> 
      );
    }
}

export default App;