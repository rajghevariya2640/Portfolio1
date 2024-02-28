import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '../Theme/LightTheme'
import { darkTheme } from '../Theme/DarkTheme'

const ThemeContext = React.createContext()

const ThemeProviderComponent = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light')

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      const mode = (prevMode === 'light') ? 'dark' : 'light'
      localStorage.setItem('themeMode', mode)
      setThemeMode(mode)
    })
  }

  useEffect(() => {
    const mode = localStorage.getItem('themeMode')
    setThemeMode(mode)
  })

  const theme = themeMode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{toggleTheme}}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeProviderComponent, ThemeContext }
