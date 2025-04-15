// File: src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Visualization from './components/Visualization';
import Suggestions from './components/Suggestions';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [llm, setLlm] = useState('');
  const [dailyQueries, setDailyQueries] = useState(0);
  const [dailyUsers, setDailyUsers] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [datacenters, setDatacenters] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="App">
      <Navbar />
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>🌿 The Hidden Environmental Cost of AI</h1>
          <p>Explore how AI impacts our planet — and what we can do about it.</p>
        </div>
      </section>

      {/* Main Interactive + Dashboard Section Side-by-Side */}
      <section id="parameters" className="main-content">
        <div className="main-wrapper">
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
            <div className="card .dashboard-main-card">
              <Visualization
                llm={llm}
                dailyQueries={dailyQueries}
                dailyUsers={dailyUsers}
                timePeriod={timePeriod}
                datacenters={datacenters}
              />
            </div>
            <div className="card .dashboard-main-card">
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
    </div>
  );
}

export default App;
