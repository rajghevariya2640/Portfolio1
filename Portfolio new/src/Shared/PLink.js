import styled from '@emotion/styled'
import React from 'react'
import {  NavLink } from 'react-router-dom'

const CustomNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none'
}))
const PLink = ({children, className, ...props}) => {
  return (
    <CustomNavLink className={`${className || ''}`} sx={{textDecoration:'none'}} {...props}>
      {children}
    </CustomNavLink>
  )
}

export default PLink
