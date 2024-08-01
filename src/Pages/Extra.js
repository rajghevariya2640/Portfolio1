import React from 'react'
import Pricing from '../Presentation/Extra/Pricing/Pricing'
import PageLayout from '../Shared/PageLayout'
import ExtraTabs from '../Presentation/Extra/Tabs/ExtraTabs'
import PGridContainer from '../Shared/PGridContainer'
import PGridItem from '../Shared/PGridItem'
import ExtraService from '../Presentation/Extra/Services/ExtraService'
import FunFact from '../Presentation/Extra/FunFact/FunFact'
import Knowledge from '../Presentation/Extra/Knowledge/Knowledge'
import Quote from '../Presentation/Extra/Quote/Quote'
import TimeLine from '../Presentation/Extra/TimeLine/TimeLine'
import AccordionSection from '../Presentation/Extra/Accordion/AccordionSection'
import Toggle from '../Presentation/Extra/Toggle/Toggle'

const Extra = () => {
  return (
    <PageLayout pageHeading='extra'>
      <PGridContainer spacing={3.75}>
        <PGridItem xs={12}>
          <Pricing />
        </PGridItem>
        <PGridItem xs={6}>
          <ExtraTabs/>
        </PGridItem>
        <PGridItem xs={6}>
          <Toggle/>
        </PGridItem>
        <PGridItem xs={6}>
          <AccordionSection/>
        </PGridItem>
        <PGridItem xs={6}>
          <TimeLine/>
        </PGridItem>
        <PGridItem xs={12}>
          <ExtraService />
        </PGridItem>
        <PGridItem xs={6}>
          <Knowledge />
        </PGridItem>
        <PGridItem xs={6}>
          <Quote />
        </PGridItem>
        <PGridItem xs={12}>
          <FunFact />
        </PGridItem>
      </PGridContainer>
    </PageLayout>
  )
}

export default Extra
