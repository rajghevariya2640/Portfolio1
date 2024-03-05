import React from 'react'
import SingleBlog from './SingleBlog'
import PButton from '../../Shared/PButton'
import Img1 from '../../assets/images/png/Blog/Blog1.png'
import Img2 from '../../assets/images/png/Blog/Blog2.png'
import Img3 from '../../assets/images/png/Blog/Blog3.png'
import Img4 from '../../assets/images/png/Blog/Blog4.png'
import Img5 from '../../assets/images/png/Blog/Blog5.png'
import Img6 from '../../assets/images/png/Blog/Blog6.png'

const BlogPage = () => {

  const blogdata = [
    {
      image: Img1,
      date: '02 Feb 2023',
      description: 'Best Practices for Animated Progress Indicators',
      label: 'UI'
    },
    {
      image: Img2,
      date: '02 Feb 2023',
      description: 'Designing the Perfect Feature Comparison Table',
      label: 'e-commerce'
    },
    {
      image: Img3,
      date: '02 Feb 2023',
      description: 'An Overview of E-Commerce Platforms',
      label: 'e-commerce'
    },
    {
      image: Img4,
      date: '02 Feb 2023',
      description: 'Why I Switched to Sketch For UI Design',
      label: 'design'
    },
    {
      image: Img5,
      date: '02 Feb 2023',
      description: 'Creative and Innovative Navigation Designs',
      label: 'UI'
    },
    {
      image: Img6,
      date: '02 Feb 2023',
      description: '6 Easy Steps to Better Icon Design',
      label: 'design'
    }
  ]

  return (
    <div>
      <SingleBlog blogDetail={blogdata} />
      <PButton variant='outlined' sx={{marginTop: '50px'}}>
        see all posts
      </PButton>
    </div>
  )
}

export default BlogPage
