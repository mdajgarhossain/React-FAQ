import React from 'react';
import './Parent.css';
import Child from '../Child/Child';
import { useState } from 'react';

function Parent() {
    const [count, setCount] = useState(0);
    const [courses, setCourses] = useState([]);
    const [developer, setDeveloper] = useState({});

    const ourCourses = ['Javascript', 'React', 'Redux'];

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

    const handleCourses = () => {    
        const newCourses = [...courses, ...ourCourses];
        setCourses(newCourses);
    };

    const handleDeveloper = developer => {
        const newDeveloper = {...developer};
        setDeveloper(newDeveloper);
        console.log(developer);
        
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
                courses={courses}
                handleCourses={handleCourses}
                developer={developer}
                handleDeveloper={handleDeveloper}
            />
        </div>
    )
}

export default Parent
