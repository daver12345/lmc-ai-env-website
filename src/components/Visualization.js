// File: src/components/Vizualization.js
import React from 'react';
import IconGrid from './IconGrid';

function Visualization({ llm, dailyQueries, dailyUsers, timePeriod, datacenters }) {
  // Placeholder calculations
  const totalQueries = dailyQueries * dailyUsers * 365 * timePeriod;
  const energyUseMWh = (totalQueries * 2.9) / 1e6; // 2.9 Wh per query
  const homesPowered = (energyUseMWh * 1000) / 10558; // 10,558 kWh/year per US home

  return (
    <main className="content">
      <h2>📊 Visualizations</h2>

      <IconGrid totalHomes={homesPowered}/>
    </main>
  );
}

export default Visualization;
