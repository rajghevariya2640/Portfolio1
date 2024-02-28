import styled from '@emotion/styled'
import React from 'react'
import PStack from '../../Shared/PStack'
import PGridContainer from '../../Shared/PGridContainer'
import PGridItem from '../../Shared/PGridItem'
import PTypography from '../../Shared/PTypography'

const BoxMain = styled(PStack)(({ theme }) => ({

}))

const SingleBox = ({boxDetail}) => {
  return (
    <BoxMain>
      {boxDetail.map((boxData, boxIndex) => {
         return (
           <PGridContainer key={boxIndex}>
             <PGridItem md={4} sx={{
               display: 'flex',
               justifyContent: "end",
               paddingRight: '25px',
             }}>
               <PStack alignItems='end'>
                 <PTypography sx={{ fontSize: 14, fontWeight: 600, color: (theme) => theme.palette.text.main50 }}>{ boxData?.year}</PTypography>
                 <PTypography sx={{fontSize: 12, fontWeight: 500, color: (theme) => theme.palette.text.mainAAA}}>{boxData?.university}</PTypography>
               </PStack>
             </PGridItem>
             <PGridItem md={8} className="" sx={{
               position :'relative',
               paddingLeft: '25px',
               '&::after': {
                 content: "''",
                 position: 'absolute',
                 top: -2,
                 left: 0,
                 transform: 'translateX(-50%)',
                 width: '1px',
                 height: '100%',
                 backgroundColor: (theme) => theme.palette.secondary.main100,
               },
               '&::before': {
                 content: "''",
                 position: 'absolute',
                 top: 5,
                 left: 0,
                 transform: 'translateX(-50%)',
                 zIndex: '1',
                 width: '11px',
                 height: '11px',
                 backgroundColor: (theme) => theme.palette.secondary.main,
                 border: `2px solid`,
                 borderColor: (theme) => `${theme.palette.primary.main}`,
                 borderRadius: '50%'
               },
             }}>
               <PStack>
                 <PTypography sx={{ fontWeight: 600, color: (theme) => theme.palette.text.main50 }}>{boxData?.course}</PTypography>
                 <PTypography sx={{fontSize: 13}}>{boxData?.description}</PTypography>
               </PStack>
             </PGridItem>
           </PGridContainer>
         )
       })}
    </BoxMain>
  )
}

export default SingleBox
