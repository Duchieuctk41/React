import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
       console.log('[Cockpit.js] useEffect');
       // Http request
    //    setTimeout(() => {
    //     alert('Saved data to cloud');
    //    }, 1000);
        toggleBtnRef.current.click();
       return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
       };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
           };
    });

    const assignClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
        assignClasses.push(classes.red);
    }
    if ( props.personsLength <= 1 ) {
        assignClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>I'm studying React</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                    Show person
            </button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);
