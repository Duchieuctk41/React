import React from 'react';

const person = (props) => {
    const style = {
        margin: '16px auto',
        padding: '16px',
        border: '1px solid black'
      }
    return (
        <div style={style} className="Person">
            <p onClick={props.click}>Hi, i'm {props.name}, i'm {props.age} years old</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default person;