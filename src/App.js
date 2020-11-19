import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';
import person from './Person/Person';

class App extends Component
{
  state={
    persons: [
      {id: 'abc', name: 'Hieu', age: '28'},
      {id: 'bcd', name: 'Tai', age: '19'},
      {id: 'cde', name: 'Tu', age: '32'}
    ],
    showPersons: false
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler =(event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState( {persons: persons} );
  }

  render() {

    const style = {
      border: '1px solid blue',
      padding: '8px'
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
          onClick={this.togglePersonHandler}
        >Switch</button>
        {persons}
      </div>
    )
  }
}

export default App;
