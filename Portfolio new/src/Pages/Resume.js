import React from 'react'
import PageLayout from '../Shared/PageLayout'
import Education from '../Presentation/Resume/Education'
import DesignSkill from '../Presentation/Resume/DesignSkill'
import Experience from '../Presentation/Resume/Experience'
import CodingSkill from '../Presentation/Resume/CodingSkill'
import PGridContainer from '../Shared/PGridContainer'
import PGridItem from '../Shared/PGridItem'
import PBox from '../Shared/PBox'

const Resume = () => {
  return (
    <PageLayout pageHeading='Resume' subHeading='12 Years of Experience'>
      <PGridContainer spacing={6}>
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
