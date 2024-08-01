import React from 'react'
import AboutMain from '../Presentation/About/AboutMain/AboutMain'
import Work from '../Presentation/About/Work/Work'
import Testimonial from '../Presentation/About/Testimonial/Testimonial'
import Client from '../Presentation/About/Client/Client'
import PageLayout from '../Shared/PageLayout'

const About = () => {
  return (
    <>
      <PageLayout notHome={false}>

      <AboutMain /> 
      <Work />
      <Testimonial />
      <Client/>
      </PageLayout>
    </>
  )
}

export default About
