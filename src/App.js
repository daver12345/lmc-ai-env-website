// File: src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Visualization from './components/Visualization';
import Suggestions from './components/Suggestions';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuizBanner from './components/QuizBanner';
import './App.css';

function App() {
  const [llm, setLlm] = useState('gpt-4');
  const [dailyQueries, setDailyQueries] = useState(5);
  const [dailyUsers, setDailyUsers] = useState(1000000);
  const [timePeriod, setTimePeriod] = useState(1);
  const [datacenters, setDatacenters] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="App">
      <Navbar />

      {/* Hero Section with Background */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>🌿 The Hidden Environmental Cost of AI</h1>
          <p>Explore how AI impacts our planet — and what we can do about it.</p>
        </div>
        <QuizBanner />
      </section>

      {/* Main Interactive + Dashboard Section Side-by-Side */}
      <section id="parameters" className="main-content">
        <div className="main-wrapper">
        <div className="parameters-instructions">
    💡      Use the sliders and fields to simulate how different usage patterns affect AI’s environmental impact. Adjust queries, users, datacenters and more!
        </div>
          <div className="card-toggle">
            <button onClick={() => setShowSidebar(!showSidebar)}>
              {showSidebar ? 'Hide Parameters' : 'Show Parameters'}
            </button>
          </div>
          <div className="side-by-side">
            {showSidebar && (
              <div className="card sidebar-card">
                <Sidebar
                  llm={llm}
                  setLlm={setLlm}
                  dailyQueries={dailyQueries}
                  setDailyQueries={setDailyQueries}
                  dailyUsers={dailyUsers}
                  setDailyUsers={setDailyUsers}
                  timePeriod={timePeriod}
                  setTimePeriod={setTimePeriod}
                  datacenters={datacenters}
                  setDatacenters={setDatacenters}
                />
              </div>
            )}
            <div className="card dashboard-main-card">
              <Visualization
                llm={llm}
                dailyQueries={dailyQueries}
                dailyUsers={dailyUsers}
                timePeriod={timePeriod}
                datacenters={datacenters}
              />
            </div>
            <div className="card dashboard-main-card">
              <Dashboard
                llm={llm}
                dailyQueries={dailyQueries}
                dailyUsers={dailyUsers}
                timePeriod={timePeriod}
                datacenters={datacenters}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Suggestions Section */}
      <Suggestions />
      <Footer />
    </div>
  );
}

export default App;
