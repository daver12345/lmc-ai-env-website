// File: src/components/Vizualization.js
import React from 'react';
import IconGrid from './IconGrid';

function Visualization({homesPowered, carsPowered, cityPowered}) {
  return (
    <main className="content">
      <h2>📊 Visualizations</h2>

      <IconGrid totalHomes={homesPowered}/>
    </main>
  );
}

export default Visualization;
