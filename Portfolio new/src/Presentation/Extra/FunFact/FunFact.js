import styled from '@emotion/styled'
import React from 'react'
import PStack from '../../../Shared/PStack'
import PSubHead from '../../../Shared/PSubHead'
import Clock from '../../../assets/images/svg/Clock'
import CoffeeCup from '../../../assets/images/svg/CoffeeCup'
import Heart from '../../../assets/images/svg/Heart'
import Star from '../../../assets/images/svg/Star'
import SingleConactBox from '../../Contact/SingleContactBox'

const FunFactMain = styled(PStack)(({ theme }) => ({
  '&  svg': {
    color: theme.palette.primary.main
  },
  '& .MuiStack-root:has( > .MuiTypography-h3)': {
    gap: '15px 0'
  },
}))

const FunFact = () => {

  const funBoxData = [
    {
      icon: <Heart />,
      description: 'Happy Clients',
      value: '380+'
    },
    {
      icon: <Clock />,
      description: 'Working Hours',
      value: '4,780'
    },
    {
      icon: <Star />,
      description: 'Awards Won',
      value: '15'
    },
    {
      icon: <CoffeeCup />,
      description: 'Coffee Consumed',
      value: '999+'
    }
  ]

  return (
    <FunFactMain>
      <PSubHead title='fun facts' />
      <SingleConactBox contactBox={funBoxData} />
    </FunFactMain>
  )
}

export default FunFact
