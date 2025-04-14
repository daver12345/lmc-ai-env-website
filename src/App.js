import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Suggestions from './components/Suggestions';
import './App.css';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [llm, setLlm] = useState('');
  const [dailyQueries, setDailyQueries] = useState(0);
  const [dailyUsers, setDailyUsers] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [datacenters, setDatacenters] = useState(0);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🌱 AI's Environmental Impact</h1>
        <button onClick={toggleSidebar} className="sidebar-toggle">
          {sidebarVisible ? 'Hide Controls' : 'Show Controls'}
        </button>
      </header>
      <div className="container">
        {sidebarVisible && (
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
        )}
        <Dashboard
          llm={llm}
          dailyQueries={dailyQueries}
          dailyUsers={dailyUsers}
          timePeriod={timePeriod}
          datacenters={datacenters}
        />
      </div>
      <Suggestions />
    </div>
  );
}

export default App;
