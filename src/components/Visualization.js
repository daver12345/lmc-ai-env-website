// File: src/components/Vizualization.js
import React from 'react';
import IconGrid from './IconGrid';

function Visualization({homesPowered, carsPowered, cityPowered, unit}) {

  var unitNumber;
  var imgLink;

  switch (unit) {
    case 'homes': 
      unitNumber = homesPowered;
      imgLink = 'https://icons.veryicon.com/png/o/miscellaneous/home-icon-1/house-30.png';
      break;
    case 'cars': 
      unitNumber = carsPowered;
      imgLink = 'https://cdn-icons-png.flaticon.com/512/2554/2554936.png';
      break;
    case 'city':
      unitNumber = cityPowered;
      imgLink = 'https://cdn-icons-png.flaticon.com/512/602/602182.png';
      break;
    default: 
      unitNumber = homesPowered;
      imgLink = 'https://icons.veryicon.com/png/o/miscellaneous/home-icon-1/house-30.png';
  }

  return (
    <main className="content">
      <h2>📊 Visualizations</h2>

      <IconGrid 
        unitNumber={unitNumber}
        imgLink={imgLink}
      />
    </main>
  );
}

export default Visualization;
