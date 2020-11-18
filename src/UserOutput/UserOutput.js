import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>User Name: {props.userName}</p>
            <p>Maybe random text</p>
        </div>  
    )  
}

export default userOutput;
