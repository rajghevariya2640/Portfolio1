import React from 'react'
import PSubHead from '../../../Shared/PSubHead'
import PStack from '../../../Shared/PStack'
import SingleBox from '../../Resume/SingleBox'
import Client from '../../../assets/images/png/About/Client5.png'

const TimeLine = () => {
  const detail = [
    {
      year: '2016 - Current',
      univercity: 'Google',
      course: 'Lead Ui/Ux Designer',
      description: 'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.',
      image: Client
    },
    {
      year: '2013 - 2016',
      univercity: 'Adobe',
      course: 'Senior Ui/Ux Designer',
      description: 'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.',
      image: Client
    }
  ]
  return (
    <PStack gap={3}>
      <PSubHead title='Timeline with Logo' />
      <SingleBox boxDetail={detail} />
    </PStack>
  )
}

export default TimeLine
