import React from "react";
import { FixedSizeGrid as Grid } from "react-window";

const IconGrid = ({totalHomes}) => {
    const columnCount = 10; // Adjust for layout/width
    const rowCount = Math.ceil(totalHomes / columnCount);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= totalHomes) return null;

    return (
      <div style={style} className="flex items-center justify-center">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/home-icon-1/house-30.png" alt="icon" width={32} height={32} />
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