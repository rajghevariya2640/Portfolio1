import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../Theme/LightTheme";
import { darkTheme } from "../Theme/DarkTheme";

const ThemeContext = React.createContext();

const ThemeProviderComponent = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  const [color, setColor] = useState();

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      const mode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", mode);
      setThemeMode(mode);
    });
  };

  useEffect(() => {
    const mode = localStorage.getItem("themeMode");
    const color = localStorage.getItem("primaryColor");
    // console.log('color', color)
    setThemeMode(mode);
    setColor(color);
  });
  // console.log('color', color)
  // const ligntTheme = {
  //   ...lightTheme,
  //   palette: {
  //     ...lightTheme.palette,
  //     palette: { ...lightTheme.palette.primary, primary: { main: color } },
  //   },
  // };
  const theme = themeMode === "light" ? lightTheme : darkTheme;
  console.log("theme", theme);
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProviderComponent, ThemeContext };
