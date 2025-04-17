// File: src/pages/Why.js
import React from 'react';
import './Why.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Why() {
  return (
    <div className="why-page">
    <Navbar />
      <header className="why-hero">
        <div className="why-hero-content">
          <h1>🌎 Why This Project?</h1>
          <p>Uncovering the unseen toll of AI — and why awareness matters.</p>
        </div>
      </header>

      <main className="why-content">
        <section className="why-section">
          <h2>🚨 The Problem</h2>
          <p>
            Artificial Intelligence is transforming how we live, work, and learn — but behind the innovation lies a cost we rarely discuss: its environmental footprint.
            From massive energy consumption during model training to ongoing emissions from daily queries, AI contributes significantly to global energy use.
          </p>
        </section>

        <section className="why-section">
          <h2>💡 Why We Care</h2>
          <p>
            As AI becomes more integrated into our daily lives, its impact scales rapidly. While many applaud its capabilities, fewer stop to ask: at what environmental cost?
            We believe the public deserves to understand this tradeoff. Knowledge empowers action — and we want people to make informed, sustainable tech choices.
          </p>
        </section>

        <section className="why-section">
          <h2>🎯 Our Goal</h2>
          <p>
            This project is designed to raise awareness and inspire behavioral change. Through interactive visualizations and data-backed insights, we want users to:
            <ul>
              <li>Understand how their AI usage translates to real-world environmental impact</li>
              <li>Explore the global footprint of AI technology</li>
              <li>Discover simple ways to reduce their digital carbon footprint</li>
            </ul>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Why;
