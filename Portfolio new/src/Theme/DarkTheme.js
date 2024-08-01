import { createTheme } from "@mui/material";
import { theme } from "./Theme.js";
export const dark222 = "#222222";
export const dark333 = "#333333";
export const dark444 = "#444444";
export const dark555 = "#555555";
export const dark666 = "#666666";
export const greyd5 = "#d5d5d5";

const DarkThemeProvider = (PrimaryColor) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: PrimaryColor,
      },
      white: {
        main: "#fff",
      },
      dark: {
        main: "#000",
      },
      secondary: {
        main: dark222,
        main50: dark333,
        main100: dark444,
        main200: dark555,
        main300: "#aeaeae",
        main400: "#282828",
        main500: dark555,
        main600: dark666,
      },
      text: {
        main: greyd5,
        main50: "#f5f5f5",
        main100: "#fff",
        mainAAA: "#aaa",
      },
      border: {
        main: greyd5,
        main50: dark333,
        main100: dark222,
        main200: dark555,
        main300: dark444,
        main400: dark555,
      },
      icon: {
        main: "#aaaaaa",
        main50: "#cccccc",
        main100: "#cccccc",
      },
      bg: {
        main: dark333,
      },
      boxShadow: {
        main: "rgba(255,255,255,0.15)",
      },
    },
    components: {
      ...theme.components,
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#000000",
            color: "#d5d5d5",
            overflowX: "hidden",
          },
        },
      },
    },
    typography: {
      fontFamily: "Poppins",
    },
  });

  return darkTheme;
};

export default DarkThemeProvider;
