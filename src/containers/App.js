import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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
  };

  deletePerson = (indexPerson) => {
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({persons: persons});
  };

  updateInput = (event, id) => {
    const personIndex = this.state.persons.findIndex( person => person.id === id );
    
    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.updateInput}
          />
      );
    }
    
    return (
        <div className={classes.App}>
          <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          />
          {persons}
        </div>
    )
  }
}

export default App;
