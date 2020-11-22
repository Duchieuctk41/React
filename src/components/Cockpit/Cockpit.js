import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
        assignClasses.push(classes.red);
    }
    if ( props.persons.length <=1) {
        assignClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>I'm studying React</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                    Show person
            </button>
        </div>
    );
};

export default cockpit
