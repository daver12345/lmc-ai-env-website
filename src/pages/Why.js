// File: src/pages/Why.js
import React from 'react';
import './Why.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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

      <img
              src="https://focus.namirial.com/en/wp-content/uploads/sites/4/ai-climate-change.jpg"
              className="quick-facts-image"
            />


      <main className="why-content">

        
        <section className="why-section">
        
          <h2>The Problem</h2>
          <p>
            Over the last few years, the explosive growth and development of Artificial Intelligence has uncovered a 
            plethora of applications in almost every industry.
            As AI has become more powerful, it has become more commonplace. Professionals in a wide variety of sectors, as well as students across the globe, use models
            like GPT-4 and DeepSeek-V3 to write emails, debug code, and assist with homework on a daily basis.
            </p>
            <p>
            While these models are impressive and beneficial in many ways, one aspect that is often overlooked is 
            their environmental impact. Researchers argue that quantifying this impact is a crucial step in addressing 
            the ongoing climate crisis.
          </p>

          <p>
            The development of AI technologies is moving at an unprecedented rate. However, as their influence grows, we must recognize the urgent need to address the environmental footprint that comes with it. If we don't act now, the strain on our planet will only increase, and the consequences will be irreversible.
          </p>

          <p>
            <strong>We need to make sure that this technological revolution doesn't come at the expense of our environment.</strong> The responsibility lies not only with AI companies but with each of us as users. Together, we can make a difference by advocating for sustainability and making conscientious choices in how we interact with these technologies.
          </p>

          <p>
            The change won't happen overnight, but if we all take small, deliberate steps to minimize our environmental impact—whether by reducing energy consumption, supporting green technologies, or pushing for greater transparency—we can ensure that AI continues to evolve responsibly, without further damaging the planet.
          </p>

          <div className="quote-box">
            <p>"Training a single large AI model can emit more than 626,000 pounds of carbon dioxide — nearly five times the lifetime emissions of an average car."</p>
            <span>— MIT Technology Review</span>
          </div>
        </section>
        <img
              src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?cs=srgb&dl=pexels-pixabay-247763.jpg&fm=jpg"
              className="quick-facts-image"
            />
        <section className="why-section">
        
          <h2>Quick Facts</h2>
            
            <ul className="problem-facts">
              <li><strong>⚡ A single AI training run</strong> for a large language model like GPT-3 can emit over <span className="highlight">550,000 lbs of CO₂</span> — equivalent to flying a person round-trip from New York to San Francisco more than <span className="highlight">300 times</span>.</li>
              <li><strong>🌐 Data centers</strong> powering AI consume about <span className="highlight">1–2% of global electricity</span>, with projections rising sharply as AI demand surges.</li>
              <li><strong>🔁 Everyday interactions</strong> like AI image generation or chatting with assistants are energy-intensive — some estimates suggest AI search engines use up to <span className="highlight">10× more energy per query</span> than traditional search engines.</li>
              <li><strong>🔥 The carbon cost</strong> of running AI 24/7 means your digital footprint extends far beyond your device — it lives in server farms powered by vast amounts of energy, often from non-renewable sources.</li>
            </ul>
            
        </section>

        <section className="why-section">
          <h2>Why We Care</h2>
          <p>
            As AI weaves deeper into our daily routines, its environmental footprint grows alongside its capabilities.
            While many celebrate the breakthroughs, fewer ask: what's the cost to our planet?
          </p>
          <p>
            We believe everyone should understand this tradeoff. Awareness sparks action — and with the right information, people can make smarter, more sustainable tech choices.
          </p>
        </section>
        <img
              src="https://www.tracebloc.io/blogs/images/greenai_thumb.jpg"
              className="quick-facts-image"
            />
        <section className="why-section">
          <h2>Our Goal</h2>
            <p>
              This project aims to spark awareness and drive meaningful change. With interactive visuals and data-driven insights, we help users:            </p>
            <ul>
              <li>See how their AI usage impacts the environment</li>
              <li>Understand the global carbon cost of AI technologies</li>
              <li>Learn simple, effective ways to reduce their digital footprint</li>
            </ul>
          
        </section>

        <div className="why-cta">
          <Link to="/suggestions" className="cta-button">🌱 See What You Can Do</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Why;
