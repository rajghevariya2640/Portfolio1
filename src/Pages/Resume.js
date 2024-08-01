import React from 'react'
import CodingSkill from '../Presentation/Resume/CodingSkill'
import DesignSkill from '../Presentation/Resume/DesignSkill'
import Education from '../Presentation/Resume/Education'
import Experience from '../Presentation/Resume/Experience'
import PGridContainer from '../Shared/PGridContainer'
import PGridItem from '../Shared/PGridItem'
import PageLayout from '../Shared/PageLayout'

const Resume = () => {
  return (
    <PageLayout pageHeading='Resume' subHeading='12 Years of Experience'>
      <PGridContainer rowSpacing={1.5} columnSpacing={6}>
        <PGridItem xs={12} md={8}>
          <Education/>
        </PGridItem>
        <PGridItem xs={12} md={4}>
          <DesignSkill/>
        </PGridItem>
        <PGridItem xs={12} md={8}>
          <Experience/>
        </PGridItem>
        <PGridItem xs={12} md={4}>
          <CodingSkill/>
        </PGridItem>
      </PGridContainer>
    </PageLayout>
  )
}

export default Resume
