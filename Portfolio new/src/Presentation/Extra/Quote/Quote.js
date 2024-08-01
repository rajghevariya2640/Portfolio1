import React from 'react'
import PStack from '../../../Shared/PStack'
import PSubHead from '../../../Shared/PSubHead'
import PTypography from '../../../Shared/PTypography'
import styled from '@emotion/styled'

const QuoteBox = styled(PStack)(({ theme }) => ({
  padding: '15px 20px',
  borderLeft: `2px solid ${theme.palette.border.main400}`,
  gap: '15px 0',
  '& .MuiTypography-root': {
    fontSize: '14px',
    fontStyle: 'italic',
    fontWeight: 600,
    lineHeight: '1.75'
  },
  '& .MuiTypography-body1': {
    color: theme.palette.text.main50
  },
  '& .MuiTypography-body2': {
    color: theme.palette.text.mainAAA
  },
}))

const Quote = () => {
  return (
    <PStack spacing={5}>
      <PSubHead title='quote' />
      <QuoteBox padding='15px 20px'>
        <PTypography>
          Pellentesque in est tellus. In vel pulvinar nibh. Suspendisse facilisis tristique purus quis facilisis. Fusce placerat turpis non orci mattis, eu ullamcorper ante
          blandit. Maecenas at aliquet libero. Aliquam volutpat est et lobortis consectetur.
        </PTypography>
        <PTypography variant='body2'>
          Steve Jobs
        </PTypography>
      </QuoteBox>
    </PStack>
  )
}

export default Quote
