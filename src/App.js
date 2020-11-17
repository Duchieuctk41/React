import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Hieu', age: 21},
      {name: 'Duy', age: 20},
      {name: 'Lam', age: 22}
    ],
    otherState: 'somewhat!!!'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 18},
        {name: 'Tu', age: 19},
        {name: 'Dat', age: 17}
      ]
    });
  };

  render() {
      return (
        <div className="App">
          <button onClick={() => this.switchNameHandler('Khoa')}>Click me</button>
          <Person name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
         
          <Person name={this.state.persons[1].name}
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Hong')} />
         
          <Person name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div> 
      );
    }
}

export default App;
