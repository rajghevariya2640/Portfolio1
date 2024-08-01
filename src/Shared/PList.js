import { List } from '@mui/material'
import React from 'react'

const PList = ({children, className, ...props}) => {
  return (
    <List className={`${className || ''}`} {...props}>
      {children}
    </List>
  )
}

export default PList
