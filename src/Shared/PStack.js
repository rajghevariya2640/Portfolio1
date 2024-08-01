import { Stack } from '@mui/material'
import React from 'react'

const PStack = ({children, className, ...props}) => {
  return (
    <Stack className={`${className || ''}`} {...props}>
      {children}
    </Stack>
  )
}

export default PStack
