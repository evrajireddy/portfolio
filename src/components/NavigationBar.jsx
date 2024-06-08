import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <>
            <div className="card compact bg-base-100 shadow bg-opacity-40 scroll-py-0">
                <div className="card-body">
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/books">Books</Link>
                    
                </div>
            </div>
        </>
        )

}

export default NavigationBar;