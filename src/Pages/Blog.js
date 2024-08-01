import React from 'react'
import PageLayout from '../Shared/PageLayout'
import BlogPage from '../Presentation/Blog/BlogPage'

const Blog = () => {
  return (
    <PageLayout pageHeading='Blog' subHeading='my diary'>
      <BlogPage/>
    </PageLayout>
  )
}

export default Blog
