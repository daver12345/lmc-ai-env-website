import React from "react";
import { FixedSizeGrid as Grid } from "react-window";

const IconGrid = ({unitNumber, imgLink}) => {
  const columnCount = 6; // Adjust for layout/width
  const rowCount = Math.ceil(unitNumber / columnCount);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= Math.round(unitNumber)) return null;

    return (
      <div style={style} className="flex items-center justify-center">
        <img src={imgLink} alt="icon" width={32} height={32} />
      </div>
    );
  };

  return (
    <Grid
      columnCount={columnCount}
      columnWidth={40}
      height={640}
      rowCount={rowCount}
      rowHeight={40}
      width={420}
    >
      {Cell}
    </Grid>
  );
};

export default IconGrid;