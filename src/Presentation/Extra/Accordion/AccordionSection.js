import React from 'react'
import PStack from '../../../Shared/PStack'
import PSubHead from '../../../Shared/PSubHead'
import AccordionDesign from './AccordionDesign'
import AccordionArrow from '../../../assets/images/svg/AccordionArrow'
import Plus from '../../../assets/images/svg/Plus'
import Minus from '../../../assets/images/svg/Minus'

const AccordionSection = () => {

  const data = [
    {
      label: 'Cras fringilla leo enim',
      description: 'Vestibulum blandit, mauris ut fringilla interdum, felis lacus cursus arcu, eget mollis arcu quam ac turpis. In condimentum rutrum justo eu rhoncus. Nullam euismod vulputate tortor sed semper.',
      expandMoreIcon: <Plus />,
      expandLessIcon: <Minus />
    },
    {
      label: 'Lorem ipsum dolor sit amet',
      description: 'Maecenas sed elementum nisi. Maecenas at orci sit amet nisl mattis efficitur. Morbi consequat dolor eget libero mattis, quis aliquet eros condimentum. Quisque egestas turpis vitae hendrerit pretium.',
      expandMoreIcon: <Plus />,
      expandLessIcon: <Minus />
    },
    {
      label: 'Sed tincidunt nibh elit',
      description: 'Ut sodales, nulla a ultrices rhoncus, lectus ligula tincidunt justo, id placerat diam mauris in lectus. Aenean eget enim eu orci malesuada auctor a sed ipsum. Morbi nec ornare quam.',
      expandMoreIcon: <Plus />,
      expandLessIcon: <Minus />
    }
  ]

  return (
    <PStack spacing={3}>
      <PSubHead title='Accordion' />
      <AccordionDesign accordion={data} />
    </PStack>
  )
}

export default AccordionSection
