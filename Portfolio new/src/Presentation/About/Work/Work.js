import React from 'react'
import PSubHead from '../../../Shared/PSubHead'
import styled from '@emotion/styled'
import PStack from '../../../Shared/PStack'
import PGridContainer from '../../../Shared/PGridContainer'
import SingleWork from './SingleWork'
import Shop from '../../../assets/images/svg/Shop'
import Pen from '../../../assets/images/svg/Pen'
import LaptopMobile from '../../../assets/images/svg/LaptopPhone'
import ManagementIcon from '../../../assets/images/svg/Management'
import { darkTheme } from '../../../Theme/DarkTheme'
import PBox from '../../../Shared/PBox'

const WorkWrapper = styled(PStack)(({ theme }) => ({
  marginTop: '55px'
}))

const Work = () => {

  const workData = [
    {
      icon: <Shop />,
      lable: 'Ecommerce',
      description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    },
    {
      icon: <Pen />,
      lable: 'Copywriter',
      description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    },
    {
      icon: <LaptopMobile />,
      lable: 'Web Design',
      description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    },
    {
      icon: <ManagementIcon />,
      lable: 'Management',
      description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    }
  ]

  return (
    <WorkWrapper>
      <PSubHead title='What i do' />
      <PBox sx={{marginTop: 6}}>
        <PGridContainer rowSpacing={8} columnSpacing={6}>
          <SingleWork singleWork={workData} />
        </PGridContainer>
      </PBox>
    </WorkWrapper>
  )
}

export default Work
