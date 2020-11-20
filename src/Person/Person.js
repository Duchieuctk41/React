import React from 'react';
import Radium from 'radium';

const person = (props) => {
    const style = {
        margin: '16px auto',
        padding: '16px',
        border: '1px solid black',
        '@media (max-width: 600px)': {
            backgroundColor: 'black',
            color: 'white'
        }
      }
    return (
        <div style={style} className="Person">
            <p onClick={props.click}>Hi, i'm {props.name}, i'm {props.age} years old</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default Radium(person);