import React from 'react'
import Gallery from '../Presentation/Portfolio/Gallery'
import PageLayout from '../Shared/PageLayout'

const Portfolio = () => {

  return (
    <PageLayout pageHeading='portfolio' subHeading='my work'>
      <Gallery/>
    </PageLayout>
  )
}

export default Portfolio
