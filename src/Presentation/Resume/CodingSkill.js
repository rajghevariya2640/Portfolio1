import React from 'react'
import PSubHead from '../../Shared/PSubHead'
import SingleProcess from './SingleProcess'

const CodingSkill = () => {
  const processDetail = [
    {
      lable: 'javascript',
      value: '85'
    },
    {
      lable: 'JQuery',
      value: '90'
    },
    {
      lable: 'React',
      value: '50'
    },
    {
      lable: 'perl',
      value: '75'
    },
  ]

  return (
    <div>
      <PSubHead title='Designing Skill' />
      <SingleProcess processData={processDetail} />
    </div>
  )
}

export default CodingSkill
