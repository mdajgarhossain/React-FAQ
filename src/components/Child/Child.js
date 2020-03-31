import React from 'react';
import './Child.css';

function Child(props) {
    // console.log(props);
    const {count, handleIncrement, handleDecrement} = props;
    
    return (
        <div className="child">
            <h2>I am Child Component</h2>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Child
