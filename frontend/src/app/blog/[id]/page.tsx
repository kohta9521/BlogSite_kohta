import React from 'react'

import ArticleLayout from '@/components/templates/ArticleLayout'
import Header from '@/components/organisms/Header'
import Contact from '@/components/organisms/Contact'
import LinkArea from '@/components/organisms/LinkArea'
import Footer from '@/components/organisms/Footer'
import BlogGet from '../components/BlogGet'

const BlogDetail = () => {
  return (
    <div>
      <Header />
      <ArticleLayout id={1}>
        <BlogGet />
      </ArticleLayout>
      <Contact />
      <LinkArea />
      <Footer />
    </div>
  )
}

export default BlogDetail
