import React, { useContext } from 'react';
import './Child.css';
import { ThemeContext } from '../../App';

function Child(props) {
    const theme = useContext(ThemeContext);
    console.log(theme);
    const {count, handleIncrement, handleDecrement, courses, handleCourses, developer, handleDeveloper} = props;

    const fullstack = {
        name: 'Jewell',
        age: 26,
        stack: 'Fullstack'
    };
    
    return (
        <div className="child">
            <h2 style={{background: theme.background, color: theme.foreground}}>I am Child Component</h2>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <br/>
            <h5 onClick={handleCourses}>Click here to see all courses: </h5>
            <ul>
                {
                    courses.map(course => <li>{course}</li>)
                }
            </ul>
            <button onClick={() => handleDeveloper(fullstack)}>Developer Details</button>
            <div className="showDeveloper">
                <p>Developer Name: {developer.name}</p>
                <p>Developer Age: {developer.age}</p>
            </div>
        </div>
    )
}

export default Child
