import { createTheme } from "@mui/material";
import { dark222 } from "./DarkTheme";
import { theme } from "./Theme.js";
const white = "#ffffff";

const LightThemeProvider = (primaryColor) => {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: primaryColor,
      },
      white: {
        main: white,
      },
      dark: {
        main: "#000000",
      },
      secondary: {
        main: white,
        main50: "#fcfcfc",
        main100: "#eeeeee",
        main200: white,
        main300: "#aeaeae",
        main400: "#fdfdfd",
        main500: white,
        main600: "#eeeeee",
      },
      text: {
        main: "#666666",
        main50: dark222,
        main100: dark222,
        mainAAA: "#aaaaaa",
      },
      border: {
        main: "#d5d5d5",
        main50: "#f5f5f5",
        main100: dark222,
        main200: "#fdfdfd",
        main300: "#e5e5e5",
        main400: "#e5e5e5",
      },
      icon: {
        main: "#888888",
        main50: "#cccccc",
        main100: dark222,
      },
      bg: {
        main: white,
      },
      boxShadow: {
        main: "rgba(0,0,0,0.15)",
      },
    },
    ...theme.breakpoints,
    components: {
      ...theme.components,
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#f5f5f5",
            color: "#666666",
            overflowX: "hidden",
          },
        },
      },
    },
    typography: {
      fontFamily: "Poppins",
    },
  });
  return lightTheme;
};

export default LightThemeProvider;
