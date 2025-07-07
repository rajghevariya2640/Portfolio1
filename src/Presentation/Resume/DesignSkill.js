import React from 'react'
import PSubHead from '../../Shared/PSubHead'
import SingleProcess from './SingleProcess'

const DesignSkill = () => {

  const processDetail = [
    {
      lable: 'HTML',
      value: '96'
    },
    {
      lable: 'CSS',
      value: '95'
    },
    {
      lable: 'Tailwind',
      value: '93'
    },
    {
      lable: 'Material UI',
      value: '90'
    },
    {
      lable: 'Bootstrap',
      value: '95'
    }
  ]

  return (
    <div>
      <PSubHead title='Designing Skill' />
      <SingleProcess processData={processDetail} />
    </div>
  )
}

export default DesignSkill
