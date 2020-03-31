import React from 'react';
import './Parent.css';
import Child from '../Child/Child';

function Parent() {
    return (
        <div className="parent">
            <h1>I am Parent component!</h1>
            <Child />
        </div>
    )
}

export default Parent
