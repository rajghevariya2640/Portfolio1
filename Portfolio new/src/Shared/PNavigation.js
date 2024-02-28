import React from 'react'
import styled from '@emotion/styled'
import LeftArrow from '../assets/images/svg/LeftArrow'
import RightArrow from '../assets/images/svg/RightArrow'
import PBox from './PBox'
import PStack from './PStack'

const NavigationWrapper = styled(PStack)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  zIndex: 1,
  '& .MuiBox-root': {
    backgroundColor: theme.palette.secondary.main500,
    border: `1px solid ${theme.palette.border.main400}`,
    height: 28,
    width: 28,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    '& svg': {
      transition: 'all 0.3s ease-in-out',
      fill: theme.palette.secondary.main500
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.main,
      '& svg': {
        fill: theme.palette.primary.main
      }
    }
  }
}))

const PNavigation = ({prevClass, nextClass, color}) => {
  return (
    <NavigationWrapper direction='row' gap={1}>
      <PBox className={`${prevClass || ''}`}>
        <LeftArrow color={color} />
      </PBox>
      <PBox className={`${nextClass || ''}`}>
        <RightArrow color={color} />
      </PBox>
    </NavigationWrapper>
  )
}

export default PNavigation
