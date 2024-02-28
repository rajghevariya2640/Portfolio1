import React from 'react'
import PSubHead from '../../Shared/PSubHead'
import SingleProcess from './SingleProcess'

const DesignSkill = () => {

  const processDetail = [
    {
      lable: 'web design',
      value: '95'
    },
    {
      lable: 'print design',
      value: '65'
    },
    {
      lable: 'logo design',
      value: '80'
    },
    {
      lable: 'graphic design',
      value: '90'
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
