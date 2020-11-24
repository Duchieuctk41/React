import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';


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
    showCockpit: true,
    chanCounter: 0
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

    this.setState((prevStage, props) => {
      return {
        persons: persons,
        changeCounter: prevStage.chanCounter + 1
      };
    });
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
        <Aux>
          <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
          {this.state.showCockpit ? (
          <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
          /> ) : null}
          {persons}
        </Aux>
    )
  }
}

export default withClass(App, classes.App);
