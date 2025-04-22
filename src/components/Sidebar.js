// File: src/Sidebar.js
import React from 'react';

function Sidebar({
  llm, setLlm,
  dailyQueries, setDailyQueries,
  dailyUsers, setDailyUsers,
  timePeriod, setTimePeriod,
  datacenters, setDatacenters
}) {
  return (
    <aside className="sidebar">
      <h2>🌍 Adjust Parameters</h2>
      <div className="field">
        <label>Language Model:</label>
        <select value={llm} onChange={(e) => setLlm(e.target.value)}>
          <option value="">Choose an LLM</option>
          <option value="gpt-4">GPT-4</option>
          <option value="gpt-3">GPT-3</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div className="field">
        <label>Daily Queries:</label>
        <input type="number" min="1" value={dailyQueries} onChange={(e) => setDailyQueries(e.target.value)} />
      </div>
      <div className="field">
        <label>Daily Users:</label>
        <input type="number" min="1" value={dailyUsers} onChange={(e) => setDailyUsers(e.target.value)} />
      </div>
      <div className="field">
        <label>Time Period (Years): {timePeriod}</label>
        <input type="range" min="1" max="10" step="1" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} />
      </div>
      <div className="field">
        <label>Datacenters:</label>
        <input type="number" min="1" value={datacenters} onChange={(e) => setDatacenters(e.target.value)} />
      </div>
    </aside>
  );
}

export default Sidebar;
