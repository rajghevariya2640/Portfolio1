import React from 'react'
import PSubHead from '../../Shared/PSubHead'
import SingleBox from './SingleBox'

const Experience = () => {
  const detail = [
    {
      year: '2016 - Current',
      univercity: 'Google',
      course: 'Lead Ui/Ux Designer',
      description: 'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.'
    },
    {
      year: '2013 - 2016',
      univercity: 'Adobe',
      course: 'Senior Ui/Ux Designer',
      description: 'Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.'
    },
    {
      year: '2011 - 2013',
      univercity: 'Google',
      course: 'Junior Ui/Ux Designer',
      description: 'Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.'
    }
  ]
  return (
    <>
      <PSubHead title='Experience' />
      <SingleBox boxDetail={detail} />
    </>
  )
}

export default Experience