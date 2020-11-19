import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state={
    persons: [
      {id:'abc', name:'hieu', age: 28},
      {id:'bcd', name:'huyen', age: 18},
      {id:'cde', name:'hoa', age: 38},
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            })}
          </div>
      )

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
         {persons}
        </div> 
      );
    }
}

export default App;