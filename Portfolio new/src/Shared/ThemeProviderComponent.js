import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import DarkThemeProvider from "../Theme/DarkTheme";
import LightThemeProvider from "../Theme/LightTheme";

const ThemeContext = React.createContext();

const ThemeProviderComponent = ({ children, color }) => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      const mode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", mode);
      setThemeMode(mode);
    });
  };

  useEffect(() => {
    const mode = localStorage.getItem("themeMode");
    setThemeMode(mode);
  });
  const theme =
    themeMode === "light"
      ? LightThemeProvider(color)
      : DarkThemeProvider(color);
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProviderComponent };
