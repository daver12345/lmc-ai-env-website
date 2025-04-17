import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadOnTop from './LoadOnTop';
import './App.css';

const App             = lazy(() => import('./App'));
const Why             = lazy(() => import('./pages/Why'));
const SuggestionsPage = lazy(() => import('./pages/SuggestionsPage'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <LoadOnTop />
      {/* wrap lazy routes in a Suspense boundary */}
      <Suspense fallback={<div>Loading…</div>}>
        <Routes>
          <Route path="/"           element={<App />} />
          <Route path="/why"        element={<Why />} />
          <Route path="/suggestions" element={<SuggestionsPage />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);