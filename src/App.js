import React, { useState } from 'react';

function App() {
  // State hooks for toggling sidebar and form fields
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [llm, setLlm] = useState('');
  const [dailyQueries, setDailyQueries] = useState(0);
  const [dailyUsers, setDailyUsers] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [datacenters, setDatacenters] = useState(0);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="App">
      <div className="container">
        {sidebarVisible && (
          <aside className="sidebar">
            <h2>Data Selection</h2>
            <div className="section">
              <h3>Options</h3>
              <div className="field">
                <label htmlFor="llm">LLM:</label>
                <select
                  id="llm"
                  value={llm}
                  onChange={(e) => setLlm(e.target.value)}
                >
                  <option value="">Select an LLM</option>
                  <option value="gpt-4">GPT-4</option>
                  <option value="gpt-3">GPT-3</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="dailyQueries">Daily Queries:</label>
                <input
                  type="number"
                  id="dailyQueries"
                  min="0"
                  value={dailyQueries}
                  onChange={(e) => setDailyQueries(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="dailyUsers">Daily Users:</label>
                <input
                  type="number"
                  id="dailyUsers"
                  min="0"
                  value={dailyUsers}
                  onChange={(e) => setDailyUsers(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="timePeriod">
                  Time Period: {timePeriod} {timePeriod === '1' ? 'year' : 'years'}
                </label>
                <input
                  type="range"
                  id="timePeriod"
                  min="0"
                  max="10"
                  step="1"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="datacenters">Number of Datacenters:</label>
                <input
                  type="number"
                  id="datacenters"
                  min="0"
                  value={datacenters}
                  onChange={(e) => setDatacenters(e.target.value)}
                />
              </div>
            </div>
          </aside>
        )}
        {/* <main className="content">
          {}
        </main> */}
      </div>
      <header>
        <h1>Suggestions</h1>
      </header>
    </div>
  );
}

export default App;