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
      description: '+91 8200729165'
    },
    {
      icon: <Location />,
      description: 'India'
    },
    {
      icon: <Mail />,
      description: 'rajghevariya40@gmail.com'
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
