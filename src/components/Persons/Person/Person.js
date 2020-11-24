import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

import Aux from '../../../hoc/Aux';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    
    componentDidMount() {
        // this.inputElementRef.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p 
                    key="i1"
                onClick={this.props.click}>Hi, i'm {this.props.name}, i'm {this.props.age} years old</p>
                <input 
                    key="i2"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                type="text" onChange={this.props.changed} value={this.props.name}
                ></input>
            </Aux>
        )
    }
}

export default withClass(Person, classes.Person);
