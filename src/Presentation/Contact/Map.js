import React from 'react'
import PBox from '../../Shared/PBox'

const Map = () => {
  return (
    <iframe
      src='https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&t=m&z=16&output=embed&iwloc=near'
      width='100%'
      height='150'
      style={{border: 0}}></iframe>
  )
}

export default Map
