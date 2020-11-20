import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';

const StyleDiv = styled.div`
        margin: 16px auto;
        padding: 16px;
        border: 1px solid black;

        @media (min-width: 600px) {
            background-color: black;
            color: white;
        }
    `;

const person = (props) => {

    return (
        // <div style={style} className="Person">
        <StyleDiv>
            <p onClick={props.click}>Hi, i'm {props.name}, i'm {props.age} years old</p>
            <input type="text" onChange={props.changed}></input>
        </StyleDiv>
    )
}

export default person;