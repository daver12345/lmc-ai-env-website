// File: src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ llm, dailyQueries, dailyUsers, timePeriod, datacenters }) {
  const [unit, setUnit] = useState('homes');

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

  const getImpactValue = () => {
    switch (unit) {
      case 'homes': return homesPowered.toFixed(1);
      case 'cars': return carsPowered.toFixed(1);
      case 'city': return cityPowered.toFixed(3);
      default: return homesPowered.toFixed(1);
    }
  };

  const getLabel = () => {
    switch (unit) {
      case 'homes': return 'homes/year';
      case 'cars': return 'cars/year';
      case 'city': return 'cities/year';
      default: return 'homes/year';
    }
  };

  const formatWithLabel = (value, label) => (
    <p className="impact-value">
      {value} <span className="impact-label">{label}</span>
    </p>
  );

  const formatNumberWithUnits = (number) => {
    if (number >= 1e9) return (number / 1e9).toFixed(1) + ' billion';
    if (number >= 1e6) return (number / 1e6).toFixed(1) + ' million';
    if (number >= 1e3) return (number / 1e3).toFixed(1) + 'k';
    return number.toLocaleString();
  };

  return (
    <main className="content">
      <h2>📊 Projected Impact</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>LLM</h3>
          <p>{llm || '—'}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Queries</h3>
          {formatWithLabel(formatNumberWithUnits(totalQueries), 'queries')}
        </div>
        <div className="dashboard-card">
          <h3>Estimated Energy</h3>
          {formatWithLabel(energyUseMWh.toFixed(2), 'MWh')}
        </div>
        <div className="dashboard-card">
          <h3>Could Power</h3>
          <div className="toggle-group">
            <button
              className={`toggle-btn ${unit === 'homes' ? 'active' : ''}`}
              onClick={() => setUnit('homes')}
            >Home</button>
            <button
              className={`toggle-btn ${unit === 'cars' ? 'active' : ''}`}
              onClick={() => setUnit('cars')}
            >Car</button>
            <button
              className={`toggle-btn ${unit === 'city' ? 'active' : ''}`}
              onClick={() => setUnit('city')}
            >City</button>
          </div>
          {formatWithLabel(getImpactValue(), getLabel())}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
