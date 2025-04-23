// IconGrid.js
import React from "react";

const IconGrid = ({ unitNumber, imgLink, containerWidth = 420, containerHeight = 640 }) => {
  const iconPadding = 4; // space between icons
  const maxIconsPerRow = Math.ceil(Math.sqrt(unitNumber * containerWidth / containerHeight));
  const rows = Math.ceil(unitNumber / maxIconsPerRow);
  const iconSize = Math.min(
    Math.floor(containerWidth / maxIconsPerRow) - iconPadding,
    Math.floor(containerHeight / rows) - iconPadding
  );

  const icons = Array.from({ length: unitNumber }, (_, i) => (
    <img
      key={i}
      src={imgLink}
      alt="icon"
      style={{
        width: iconSize,
        height: iconSize,
        margin: iconPadding / 2,
      }}
    />
  ));

  return (
    <div
      style={{
        width: containerWidth,
        height: containerHeight,
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        overflow: "hidden",
      }}
    >
      {icons}
    </div>
  );
};

export default IconGrid;