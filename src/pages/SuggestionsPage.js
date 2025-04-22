// File: src/pages/SuggestionsPage.js
import React from 'react';
import './SuggestionsPage.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function SuggestionsPage() {
  return (
    <div className="suggestions-page">
      <Navbar />

      <header className="suggestions-hero">
        <div className="suggestions-hero-content">
          <h1>🌿 Deep Dive: Sustainable AI Habits</h1>
          <p>Explore actionable ways to reduce your digital environmental footprint.</p>
        </div>
      </header>

      <main className="suggestions-content">
        <section className="suggestion-detail">
          <h2>🔌 Offset Your Carbon Footprint</h2>
          <p>
            Support verified carbon offset programs that plant trees, protect forests, or invest in renewable energy.
            These platforms allow you to calculate and offset emissions from your digital activities.
          </p>
          <ul>
            <li><a href="https://www.goldstandard.org/" target="_blank" rel="noopener noreferrer">Gold Standard</a></li>
            <li><a href="https://www.climatepartner.com/" target="_blank" rel="noopener noreferrer">ClimatePartner</a></li>
            <li><a href="https://www.moss.earth/" target="_blank" rel="noopener noreferrer">Moss.Earth</a></li>
          </ul>
        </section>

        <section className="suggestion-detail">
          <h2>🌞 Platforms Powered by Renewable Energy</h2>
          <p>
            Prefer services and tools that use renewable-powered data centers. Many tech companies publish their energy reports or green initiatives.
          </p>
          <ul>
            <li><a href="https://sustainable.google/" target="_blank" rel="noopener noreferrer">Google Sustainability</a></li>
            <li><a href="https://www.apple.com/environment/" target="_blank" rel="noopener noreferrer">Apple Environmental Progress</a></li>
            <li><a href="https://about.facebook.com/news/2021/04/facebook-100-percent-renewable-energy/" target="_blank" rel="noopener noreferrer">Meta (Facebook) 100% Renewable</a></li>
          </ul>
        </section>

        <section className="suggestion-detail">
          <h2>🧠 Be Mindful About Your Queries</h2>
          <p>
            Every query to an AI model consumes energy. Reduce your impact by:
          </p>
          <ul>
            <li>Batching your questions instead of sending them one at a time</li>
            <li>Turning off AI autocomplete/suggestions where not needed</li>
            <li>Favoring local tools (like spellcheck) for small tasks</li>
          </ul>
          <p>
            Read more:
            <br />
            <a href="https://www.nature.com/articles/d41586-023-00794-0" target="_blank" rel="noopener noreferrer">Nature: How AI is straining the power grid</a>
            <br />
            <a href="https://www.sciencedirect.com/science/article/pii/S2666389921001533" target="_blank" rel="noopener noreferrer">Energy & AI Journal: Mindful AI Use</a>
          </p>
        </section>
      </main>
      <img
              src="https://media.istockphoto.com/id/598057526/photo/enchanting-sunshine-on-green-treetops.jpg?s=612x612&w=0&k=20&c=Z884hwWZrzJm_WCgOVtpukVx0rYYU0qZuVoKjPN8Gw0="
              className="quick-facts-image"
            />
      <Footer />
    </div>
  );
}

export default SuggestionsPage;
