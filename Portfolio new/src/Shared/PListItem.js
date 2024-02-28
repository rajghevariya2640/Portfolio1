import { ListItem } from '@mui/material'
import React from 'react'

const PListItem = ({children, className, ...props}) => {
  return (
    <ListItem className={`${className || ''}`} {...props}>
      {children}
    </ListItem>
  )
}

export default PListItem
