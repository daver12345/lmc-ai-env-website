// File: src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="logo">EcoAI Impact</a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#parameters">Parameters</a></li>
          <li><a href="#suggestions">Suggestions</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
