import React from "react";

// light theme
export const light = {
  backgroundColor: "#fff",
  fontColor: "#000"
};

// dark theme
export const dark = {
  backgroundColor: "#000",
  fontColor: "#fff"
};

export const ThemeContext = React.createContext(null);
export const ThemeConstants = {
  light,
  dark
};
