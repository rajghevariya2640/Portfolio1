import React from 'react'
import SingleExtraService from './SingleExtraService'
import PSubHead from '../../../Shared/PSubHead'
import LaptopPhone from '../../../assets/images/svg/LaptopPhone'
import Cart from '../../../assets/images/svg/Cart'
import Analysis from '../../../assets/images/svg/Analysis'
import Marketing from '../../../assets/images/svg/Marketing'

const ExtraService = () => {

  const seviceData = [
    {
      icon: <LaptopPhone />,
      label: 'Web Design',
      description: 'Pellentesque sit amet libero non nulla tincidunt rhoncus. Nam in feugiat sapien, id blandit est. Integer vitae ex magna.'
    },
    {
      icon: <Cart />,
      label: 'eCommerce',
      description: 'Pellentesque sit amet libero non nulla tincidunt rhoncus. Nam in feugiat sapien, id blandit est. Integer vitae ex magna.'
    },
    {
      icon: <Analysis />,
      label: 'Analytics',
      description: 'Pellentesque sit amet libero non nulla tincidunt rhoncus. Nam in feugiat sapien, id blandit est. Integer vitae ex magna.'
    },
    {
      icon: <Marketing />,
      label: 'Marketing',
      description: 'Pellentesque sit amet libero non nulla tincidunt rhoncus. Nam in feugiat sapien, id blandit est. Integer vitae ex magna.'
    }
  ]

  return (
    <div>
      <PSubHead title='Service' />
      <SingleExtraService ExtraService={seviceData} />
    </div>
  )
}

export default ExtraService
