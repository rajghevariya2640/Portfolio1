import React from 'react'
import { theme } from '../Theme/Theme'
import PTypography from './PTypography'

const PSubHead = ({title}) => {
  return (
      <PTypography variant='h5' sx={{
          color: (theme) => theme.palette.text.main50,
          textTransform: 'capitalize',
          position: 'relative',
          width: 'fit-content',
          '&::after': {
              content: "''",
              position: 'absolute',
              bottom: -5,
              left: 0,
              height: 2,
              width: '100%',
              backgroundColor: (theme) => theme.palette.primary.main,
          },
      }}>
      {title}
    </PTypography>
  )
}

export default PSubHead
