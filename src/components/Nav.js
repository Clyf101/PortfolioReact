import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/nav.css";




function Navbar() {
    return (
        <div className="navbar">
            <div classname="toggleButton">
               
            </div>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/About"> About</Link>
                <Link to="/Projects"> Projects</Link>
                <Link to="/Education"> Education</Link>
                
            </div>

        </div>
    );
}
export default Navbar;