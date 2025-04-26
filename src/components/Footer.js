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
          Built by Amanda Candido, David Beugnon, Patrick Birner, and Kieran Marland for LMC 3403. 
        </p>
        <p className="footer-links">
          <a href="https://docs.google.com/document/d/1rFBZEHwFIuSYrHk9Ao-UD0tKpzGGyZ9lMpHBkWxryrk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Data Sources</a> |
          <a href="https://github.com/daver12345/lmc-ai-env-website" target="_blank" rel="noopener noreferrer"> GitHub Repo</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
