// File: src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

<Link to="/why">Why This Project</Link>


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="logo">EcoAI Impact</a>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/why">Why</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
