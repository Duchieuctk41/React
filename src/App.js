import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons: [
      {name:'hieu', age: 28},
      {name:'huyen', age: 18},
      {name:'hoa', age: 38},
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
      return (
        <div className="App">
         <h1>Hi, i'm Hieu</h1>
         <p>I'm studying React</p>
         <button
         style={style}
         onClick={this.togglePersonsHandler}
         >
         Toggle persons  
         </button>
         {
          this.state.showPersons === true ? 
          <div>
         <Person name={this.state.persons[0].name}
         age={this.state.persons[0].age}
         />
         <Person name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         />
         </div> : null}
        </div> 
      );
    }
}

export default App;