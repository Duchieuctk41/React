import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

const burgerBuilder = () => {
    return (
        <Aux>
            <Burger />
            <div>Burger control</div>
        </Aux>
    );
} 

export default burgerBuilder;
