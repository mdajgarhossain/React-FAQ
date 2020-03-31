import React from 'react';
import './Parent.css';
import Child from '../Child/Child';
import { useState } from 'react';

function Parent() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        console.log('Increment');
    };
    const handleDecrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        console.log('Decrement');
    };

    return (
        <div className="parent">
            <h1>I am Parent component!</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <Child 
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
        </div>
    )
}

export default Parent
