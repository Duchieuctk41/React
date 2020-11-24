import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

import Aux from '../../../hoc/Aux';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p 
                    key="i1"
                onClick={this.props.click}>Hi, i'm {this.props.name}, i'm {this.props.age} years old</p>
                <input 
                    key="i2"
                type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Aux>
        )
    }
}

export default withClass(Person, classes.Person);