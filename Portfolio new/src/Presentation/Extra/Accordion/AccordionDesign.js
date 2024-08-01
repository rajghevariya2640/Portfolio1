import styled from '@emotion/styled'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React, { useState } from 'react'
import PStack from '../../../Shared/PStack'

const AccordionMain = styled(PStack)(({ theme }) => ({
  border: `1px solid ${theme.palette.border.main400}`,
  '& .MuiPaper-root': {
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.border.main400}`,
    '&:last-of-type': {
      borderBottom: '0'
    },
    '&::before': {
      display: 'none'
    },
    '& .MuiAccordionSummary-root': {
      flexDirection: 'row-reverse',
      padding: '0 14px',
      gap: '10px',
      '& .MuiAccordionSummary-expandIconWrapper': {
        color: theme.palette.primary.main,
        '&.Mui-expanded': {
          transform: 'rotate(0deg)'
        }
      },
      '& .MuiAccordionSummary-content': {
        color: theme.palette.primary.main,
        fontSize: '14px',
        fontWeight: '500',
      }
    },
    '& .MuiAccordionDetails-root': {
      fontSize: '14px',
      padding: '14px 15px'
    }
  }
}))

const AccordionDesign = ({accordion}) => {

  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <AccordionMain>
      {accordion?.map((accData, accIndex) => {
         return (
           <Accordion disableGutters defaultExpanded expanded={expanded === `panel${accIndex + 1}`} onChange={handleChange(`panel${accIndex + 1}`)} key={accIndex}>
             <AccordionSummary id={`panel${accIndex+1}-header`} expandIcon={expanded === `panel${accIndex + 1}` ? accData?.expandLessIcon : accData?.expandMoreIcon }>
               {accData?.label}
             </AccordionSummary>
             <AccordionDetails>
               {accData?.description}
             </AccordionDetails>
           </Accordion>
         )
       })}
    </AccordionMain>
  )
}

export default AccordionDesign
