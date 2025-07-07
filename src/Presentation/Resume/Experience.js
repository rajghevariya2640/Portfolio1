import React from 'react'
import PSubHead from '../../Shared/PSubHead'
import SingleBox from './SingleBox'

const Experience = () => {
  const detail = [
    {
      year: '2023 - Current',
      univercity: 'Sr. Web Designer',
      course: 'Tagline Infotech LLP',
      description: 'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.'
    },
    {
      year: '2022 - 2023',
      univercity: 'Jr. Web Designer',
      course: 'Ajasys Technologies',
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