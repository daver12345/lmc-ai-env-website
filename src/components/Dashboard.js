// File: src/components/Dashboard.js
import React from 'react';

function Dashboard({ llm, dailyQueries, dailyUsers, timePeriod, datacenters }) {
  // Placeholder calculations
  const totalQueries = dailyQueries * dailyUsers * 365 * timePeriod;
  const energyUseMWh = (totalQueries * 2.9) / 1e6; // 2.9 Wh per query
  const homesPowered = (energyUseMWh * 1000) / 10558; // 10,558 kWh/year per US home

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
          <p>{totalQueries}</p>
        </div>
        <div className="dashboard-card">
          <h3>Estimated Energy</h3>
          <p>{energyUseMWh.toFixed(2)} MWh</p>
        </div>
        <div className="dashboard-card">
          <h3>Could Power</h3>
          <p>{homesPowered.toFixed(1)} homes/year</p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
