import React from 'react'
import PageLayout from '../Shared/PageLayout'
import Map from '../Presentation/Contact/Map'
import ContactInfo from '../Presentation/Contact/ContactInfo'
import ContactForm from '../Presentation/Contact/ContactForm'

const Contact = () => {
  return (
    <PageLayout pageHeading='Contact' subHeading='get in touch'>
      <Map />
      <ContactInfo />
      <ContactForm />
    </PageLayout>
  )
}

export default Contact
