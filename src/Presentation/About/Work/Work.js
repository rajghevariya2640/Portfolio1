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
import PBox from '../../../Shared/PBox'

const WorkWrapper = styled(PStack)(({ theme }) => ({
  marginTop: '55px'
}))

const Work = () => {

  const workData = [
    {
      icon: <Shop />,
      lable: 'Ecommerce',
      description: 'I design and develop ecommerce interfaces that drive sales and improve user engagement. From product listing pages to secure checkouts, I ensure smooth, responsive, and intuitive shopping experiences across all devices.'
    },
    {
      icon: <Pen />,
      lable: 'Copywriter',
      description: 'I assist in structuring web content that not only reads well but also aligns with branding and SEO practices. My goal is to enhance the visual message through clear, concise, and strategic copy.'
    },
    {
      icon: <LaptopMobile />,
      lable: 'Web Design',
      description: 'With a keen eye for aesthetics and usability, I craft clean, modern, and accessible UI designs. I focus on layout, typography, and visual hierarchy to create visually compelling and user-centered websites.'
    },
    {
      icon: <ManagementIcon />,
      lable: 'Management',
      description: "I contribute to the planning and execution of frontend tasks by aligning with team goals, prioritizing UI issues, and ensuring deadlines are met with quality. I'm comfortable managing small-scale project flows in agile environments."
    }
  ]

  return (
    <WorkWrapper>
      <PSubHead title='What i do' />
      <PBox sx={{marginTop: 6}}>
        <PGridContainer rowSpacing={{xs: 4, sm: 6,lg: 8}} columnSpacing={{xs: 4,sm: 6}}>
          <SingleWork singleWork={workData} />
        </PGridContainer>
      </PBox>
    </WorkWrapper>
  )
}

export default Work
