// File: src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ llm, totalQueries, homesPowered, carsPowered, cityPowered, energyUseMWh }) {
  const [unit, setUnit] = useState('homes');



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
