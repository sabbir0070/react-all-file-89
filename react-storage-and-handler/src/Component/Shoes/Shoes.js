import React from 'react';
import { add, multifly } from '../../utilities/calculate';

const Shoes = () => {
    const first = 70;
    const second = 20;
    const Multifly = multifly(first,second);
    const sum = add(first,second)
    return (
        <div>
            <h1>welcome to shoes component</h1>
            <p>Total: {Multifly} Sum:{sum} </p>
        </div>
    );
};

export default Shoes;