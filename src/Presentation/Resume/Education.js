import React from 'react'
import PSubHead from '../../Shared/PSubHead'
import SingleBox from './SingleBox'

const Education = () => {
  const detail = [
    {
      year: '2008',
      univercity: 'University of Studies',
      course: 'Frontend Development',
      description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.'
    },
    {
      year: '2007',
      univercity: 'University of Studies',
      course: 'Graphic Design',
      description: 'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.'
    }
  ]
  return (
    <>
      <PSubHead title='Education' />
      <SingleBox boxDetail={detail} />
    </>
  )
}

export default Education
