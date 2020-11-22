import React from 'react';
import classes from './Person.css';

const person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Hi, i'm {props.name}, i'm {props.age} years old</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default person;