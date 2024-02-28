import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'

const CustomButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-outlined': {
    borderWidth: 2,
  },
  '&.MuiButton-outlinedPrimary': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.text.main100,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white.main
    },
  },
  '&.MuiButton-outlinedWhite': {
    borderColor: theme.palette.border.main,
    color: theme.palette.text.main,
    '&:hover': {
      backgroundColor: theme.palette.border.main,
      color: theme.palette.dark.main
    },
  },
}))

const PButton = ({children, className, ...props}) => {
  return (
    <CustomButton  className={`${className || ''}`} {...props}>
      {children}
    </CustomButton>
  )
}

export default PButton
