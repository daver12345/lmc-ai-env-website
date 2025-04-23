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
  const [llm, setLlm] = useState('GPT-4');
  const [unit, setUnit] = useState('homes');
  const [dailyQueries, setDailyQueries] = useState(5);
  const [dailyUsers, setDailyUsers] = useState(1000000);
  const [timePeriod, setTimePeriod] = useState(1);
  const [datacenters, setDatacenters] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);

  const totalQueries = dailyQueries * dailyUsers * 365 * timePeriod;

  // Estimated energy per query by model (in Wh)
  const energyPerQueryMap = {
    'GPT-4': 2.9,
    'GPT-3': 1.1,
    'Claude': 1.5,
    'Gemini': 2.3,
    '': 2.9 // fallback default
  };

  const energyPerQuery = energyPerQueryMap[llm] || 2.9;
  const energyUseMWh = (totalQueries * energyPerQuery) / 1e6; // Convert to MWh

  // Conversions:
  // Average U.S. household uses ~10,558 kWh/year (source: EIA). Convert MWh to kWh (*1000) then divide.
  const homesPowered = (energyUseMWh * 1000) / 10558;

  // Average electric car consumes ~4.6 MWh/year (DOE estimate). Divide total energy by that number.
  const carsPowered = energyUseMWh / 4.6;

  // Approx. 45,000 MWh/year is a rough benchmark for a small city or district.
  const cityPowered = energyUseMWh / 45000;

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
                homesPowered={homesPowered}
                carsPowered={carsPowered}
                cityPowered={cityPowered}
                unit={unit}
              />
            </div>
            <div className="card dashboard-main-card">
              <Dashboard
                llm={llm}
                totalQueries={totalQueries}
                homesPowered={homesPowered}
                carsPowered={carsPowered}
                cityPowered={cityPowered}
                energyUseMWh={energyUseMWh}
                unit={unit}
                setUnit={setUnit}
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
