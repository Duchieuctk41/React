import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>Hi, i'm {this.props.name}, i'm {this.props.age} years old</p>
                <input type="text" onChange={this.props.changed}></input>
            </div>
        )
    }
}

export default Person;