import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component
{
  state = {
    persons: [
      {id: 'a', name: 'Hieu', age: 18},
      {id: 'b', name: 'Tai', age: 19},
      {id: 'c', name: 'Tu', age: 80}
    ],
    showPersons: false
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePerson = (indexPerson) => {
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({persons: persons});
  }

  updateInput = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    
    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: '#ccc',
      padding: '16px'
    }
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePerson(index)}
              changed={() => this.updateInput(event, person.id)}
            />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }
    
    return (
      <div className="App">
        <h1>Hi, i'm Hieu</h1>
        <p>I'm studying React</p>
        <button style={style}
          onClick={this.togglePersonHandler}
        >Show person</button>
        {persons}
      </div>
    )
  }
}

export default App;
