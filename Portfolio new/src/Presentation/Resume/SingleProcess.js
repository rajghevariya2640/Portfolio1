import React from 'react'
import PStack from '../../Shared/PStack'
import PTypography from '../../Shared/PTypography'
import PBox from '../../Shared/PBox'
import { LinearProgress } from '@mui/material'

const SingleProcess = ({processData}) => {
  return (
    <PBox mt='25px'>
      {processData?.map((process, processIndex) => {
         return (
           <PStack key={processIndex} mt="15px">
             <PStack direction='row' justifyContent='space-between'>
               <PTypography sx={{fontSize: '13px',textTransform: 'capitalize', fontWeight: 600, color: (theme) => theme.palette.text.main50}}>
                 {process?.lable}
               </PTypography>
               <PTypography sx={{fontSize: '11px', color: (theme) => theme.palette.text.mainAAA}}>
                 {`${process?.value}%`}
               </PTypography>
             </PStack>
                 <LinearProgress variant='determinate' value={process?.value} sx={{
                     '&.MuiLinearProgress-root': {
                         outline: `1px solid`,
                         outlineColor: (theme) => theme.palette.primary.main,
                         outlineOffset: 2,
                         borderRadius: 10,
                         background: 'transparent',
                         marginTop: '8px'
                 },
             }} />
           </PStack>
         )
       })}
    </PBox>
  )
}

export default SingleProcess
