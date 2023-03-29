import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/nav.css";



function Navbar() {
    return (
        <div classname="Navbar">
            <div classname="toggleButton">
                <button></button>
            </div>
            <div classname="links">
                <Link to="/"> Home</Link>
                <Link to="/About"> About</Link>
                <Link to="/Projects"> Projects</Link>
                <Link to="/education"> Education</Link>
                <Link to="/Contact"> Contact</Link>
            </div>

        </div>
    );
}
export default Navbar;