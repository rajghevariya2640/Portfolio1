import { createTheme } from '@mui/material'

export const theme = createTheme({
  // breakpoints: {
  //   sm: 768,
  //   md: 991
  // },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 48,
          fontWeight: 700,
          lineHeight: '1',
          '@media screen and (max-width: 1280px)': {
            fontSize: 40
          }
        },
        h2: {
          fontSize: 42,
          fontWeight: 600,
          lineHeight: '1'
        },
        h3: {
          fontSize: 30
        },
        h4: {
          fontSize: 24,
          lineHeight: '1.2em'
        },
        h5: {
          fontSize: 21,
          lineHeight: '1',
          fontWeight: 700
        },
        h6: {
          fontSize: 18,
          lineHeight: '1',
          fontWeight: 600
        },
        body2: {
          fontSize: '14px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'poppins',
          lineHeight: '1',
          padding: '12px 28px',
          textTransform: 'capitalize',
          borderRadius: '0'
        }
      }
    }
  },
  typography: {
    fontFamily: 'Poppins'
  }
})
