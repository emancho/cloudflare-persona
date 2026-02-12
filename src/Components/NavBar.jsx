//== React Libs
import React from 'react';
import { Link } from 'react-router-dom';
//== CSS
import '../App.css';

/*
Component Description:
    NavBar :- This component represents the navigation bar that redirects to any of the pages on the website.
*/

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/about" className="nav-item">About Me</Link></li>
        <li><Link to="/contact" className="nav-item">Contact Me</Link></li>
        <li><Link to="/projects" className="nav-item">Projects</Link></li>
        <li><Link to="/radio" className="nav-item">Radio</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
