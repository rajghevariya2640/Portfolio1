import React from 'react'
import PSubHead from '../../../Shared/PSubHead'
import PStack from '../../../Shared/PStack'
import AccordionDesign from '../Accordion/AccordionDesign'
import styled from '@emotion/styled'
import PBox from '../../../Shared/PBox'
import AccordionArrow from '../../../assets/images/svg/AccordionArrow'

const ToogleAccordion = styled(PBox)(({ theme }) => ({
  '& .MuiStack-root:has( > .MuiPaper-root)': {
    border: '0',
    '& .MuiPaper-root': {
      '&:last-of-type': {
        borderBottom: `1px solid ${theme.palette.border.main400}`
      }
    }
  }
}))

const Toggle = () => {

  const data = [
    {
      label: 'Toggle #1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      expanded: true,
      expandMoreIcon: <AccordionArrow />,
      expandLessIcon: <AccordionArrow />
    },
    {
      label: 'Toggle #2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      expandMoreIcon: <AccordionArrow />,
      expanded: true,
      expandLessIcon: <AccordionArrow />
    },
    {
      label: 'Toggle #3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      expanded: true,
      expandMoreIcon: <AccordionArrow />,
      expandLessIcon: <AccordionArrow />
    }
  ]

  return (
    <PStack spacing={3}>
      <PSubHead title='Toggle' />
      <ToogleAccordion>
        <AccordionDesign accordion={data} />
      </ToogleAccordion>
    </PStack>
  )
}

export default Toggle
