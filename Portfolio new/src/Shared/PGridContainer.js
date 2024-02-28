import { Grid } from '@mui/material'
import React from 'react'

const PGridContainer = ({children, className, ...props}) => {
  return (
    <Grid container className={`${className || ''}`} {...props}>
      {children}
    </Grid>
  )
}

export default PGridContainer
