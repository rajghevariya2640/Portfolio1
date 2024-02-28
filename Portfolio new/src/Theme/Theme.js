import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 48,
          fontWeight: 700,
          lineHeight: '1'
        },
        h2: {},
        h3: {
          fontSize: 30
        },
        h4: {
          fontSize: 24,
          lineHeight: '1.2em'
        },
        h5: {
          fontSize: 22,
          lineHeight: '1',
          fontWeight: 700
        },
        h6: {
          fontSize: 18,
          lineHeight: '1',
          fontWeight: 600
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
