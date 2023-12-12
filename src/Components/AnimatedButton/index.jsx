import React from "react";

export const AnimatedButton = ({ value, theme, theme2, action }) => {
  return (
    <button className={theme}>
      <span className={theme2}>{value}</span>
    </button>
  );
};
