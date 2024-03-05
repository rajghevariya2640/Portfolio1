import React from 'react'
import SinglePriceBox from './SinglePriceBox'
import PSubHead from '../../../Shared/PSubHead'

const Pricing = () => {

    const priceBoxData = [
        {
            plan: 'silver',
            price: '64',
            btnColor: 'white',
            list: ["Lorem ipsum dolor", "Pellentesque scelerisque", "Morbi eu sagittis"],
        },
        {
            plan: 'Gold',
            price: '128',
            list: ["Lorem ipsum dolor", "Pellentesque scelerisque", "Morbi eu sagittis","Donec non diam"],
        },
        {
            plan: 'Platinum',
            price: '256',
            list: ["Lorem ipsum dolor", "Pellentesque scelerisque", "Morbi eu sagittis","Donec non diam","Aenean nec libero"],
        },
    ]

  return (
      <>
       <PSubHead title="Pricing" />   
      <SinglePriceBox priceBox={priceBoxData} />
    </>
  )
}

export default Pricing
