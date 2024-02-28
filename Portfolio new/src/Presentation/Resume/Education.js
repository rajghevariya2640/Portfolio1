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
    }
  ]
  return (
    <div>
      <PSubHead title='Education' />
      <SingleBox boxDetail={detail} />
    </div>
  )
}

export default Education
