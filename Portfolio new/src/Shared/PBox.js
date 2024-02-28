import { Box } from '@mui/material'
import React from 'react'

const PBox = ({children, className, ...props}) => {
  return (
    <Box className={`${className || ''}`} {...props}>
      {children}
    </Box>
  )
}

export default PBox
