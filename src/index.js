import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Why from './pages/Why';
import SuggestionsPage from './pages/SuggestionsPage';
import LoadOnTop from './LoadOnTop';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <LoadOnTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/why" element={<Why />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
