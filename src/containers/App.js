import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component
{
  constructor (props) {
    super(props);
    console.log('[App js] constructor');
  }
  state = {
    persons: [
      {id: 'a', name: 'Hieu', age: 18},
      {id: 'b', name: 'Tai', age: 19},
      {id: 'c', name: 'Tu', age: 80}
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  };

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // };

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  };

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
    console.log('[App.js] render');
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
        <WithClass classes={classes.App}>
          <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
          {this.state.showCockpit ? (
          <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
          /> ) : null}
          {persons}
        </WithClass>
    )
  }
}

export default App;
