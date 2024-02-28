import { createTheme } from '@mui/material';
import { dark222 } from './DarkTheme';
import { theme } from "./Theme.js";
const white = '#fff'

const primaryColor = JSON.parse(localStorage.getItem("primaryColor"));

export const lightTheme = createTheme({

  palette: {
    mode: 'light',
    primary: {
      main: primaryColor || '#0099e5'
    },
    white: {
      main: '#fff'
    },
    dark: {
      main: '#000'
    },
    secondary: {
      main: white,
      main50: '#fcfcfc',
      main100: '#eee',
      main200: white,
      main300: '#aeaeae',
      main400: '#fdfdfd',
      main500: white,
      main600: '#eee',
    },
    text: {
      main: '#666',
      main50: dark222,
      main100: dark222,
      mainAAA: '#aaa',
    },
    border: {
      main: '#d5d5d5',
      main50: '#f5f5f5',
      main100: dark222,
      main200: '#fdfdfd',
      main300: '#e5e5e5',
      main400: '#e5e5e5'
    },
    icon: {
      main: '#888',
      main50: '#ccc',
      main100: dark222,
    }
  },
  components: {
    ...theme.components,
     MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5f5f5',
          color: '#666',
          overflowX: 'hidden'
        }
      }
    },

  },
  typography: {
    fontFamily: 'Poppins'
  }

})
