import React from 'react'

const LeftArrow = ({color}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
      width="14px"
      viewBox='0 0 24 24'
      stroke-width='3'
      stroke='currentColor'>
      <path stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
    </svg>

  )
}

export default LeftArrow
