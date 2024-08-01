import React from 'react'
import SingleContactBox from './SingleContactBox'
import Phone from '../../assets/images/svg/Phone'
import Location from '../../assets/images/svg/Location'
import Mail from '../../assets/images/svg/Mail'
import Correct from '../../assets/images/svg/Correct'

const ContactInfo = () => {

  const contactData = [
    {
      icon: <Phone />,
      description: '415-832-2000'
    },
    {
      icon: <Location />,
      description: 'San Francisco'
    },
    {
      icon: <Mail />,
      description: 'hello@example.com'
    },
    {
      icon: <Correct />,
      description: 'Freelance Available'
    }
  ]

  return (
    <div>
      <SingleContactBox contactBox={contactData} />
    </div>
  )
}

export default ContactInfo
