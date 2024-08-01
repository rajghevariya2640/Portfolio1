import React from 'react'
import { Swiper } from 'swiper/react'

const PSwiper = ({children, className, ...props}) => {
  return (
    <Swiper className={`${className || ''}`} {...props}>
      {children}
    </Swiper>
  )
}

export default PSwiper
