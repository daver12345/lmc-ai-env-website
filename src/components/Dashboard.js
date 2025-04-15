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
      <p><strong>LLM:</strong> {llm || '—'}</p>
      <p><strong>Total Queries:</strong> {totalQueries.toLocaleString()}</p>
      <p><strong>Estimated Energy:</strong> {energyUseMWh.toFixed(2)} MWh</p>
      <p><strong>Could power:</strong> {homesPowered.toFixed(0)} homes/year</p>

      <div className="visual-placeholder">
        <p>[Data visualizations coming soon]</p>
      </div>
    </main>
  );
}

export default Dashboard;
