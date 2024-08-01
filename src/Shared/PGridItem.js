import { Grid } from '@mui/material'
import React from 'react'

const PGridItem = ({children, className, ...props}) => {
  return (
    <Grid item className={`${className || ''}`} {...props}>
      {children}
    </Grid>
  )
}

export default PGridItem
