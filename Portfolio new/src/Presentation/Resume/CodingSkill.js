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
      lable: 'PHP',
      value: '70'
    },
    {
      lable: 'python',
      value: '60'
    },
    {
      lable: 'perl',
      value: '75'
    },
    {
      lable: 'HTML / CSS',
      value: '98'
    },
    {
      lable: 'Smarty / Twig',
      value: '80'
    }
  ]

  return (
    <div>
      <PSubHead title='Designing Skill' />
      <SingleProcess processData={processDetail} />
    </div>
  )
}

export default CodingSkill
