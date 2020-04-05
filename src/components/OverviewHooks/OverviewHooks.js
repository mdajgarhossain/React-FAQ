import React, { useState, useRef, useEffect } from 'react';

const usePrevious = value => {
    const prev = useRef();
    useEffect(() => {
        console.log(value);
        prev.current = value;
    }, [value]);
    return prev.current;
};

function OverviewHooks() {
    const [count, setCount] = useState(0);
    const previous = usePrevious(count);
    return (
        <div>
            <h3>28.8: Overview of useEffect, useRef, create a custom Hook</h3>
            <h4>Count: {count}, Previous: {previous}</h4>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default OverviewHooks;
