// File: src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

<Link to="/why">Why This Project</Link>


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">EcoAI Impact</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/why">Why</Link></li>
          <li><Link to="/suggestions">Suggestions</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
