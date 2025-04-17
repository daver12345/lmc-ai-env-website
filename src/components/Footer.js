// File: src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          🌍 This project was developed to raise awareness about the hidden environmental costs of artificial intelligence.
          <br />
          Built with 💚 by a team passionate about sustainable tech.
        </p>
        <p className="footer-links">
          <a href="https://www.iea.org/data-and-statistics" target="_blank" rel="noopener noreferrer">Data Sources</a> |
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"> GitHub Repo</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
