import React from 'react'

// scss
import styles from './Blog.module.scss'

// components
import ArticleLayout from '@/components/templates/ArticleLayout'
import Header from '@/components/organisms/Header'
import Contact from '@/components/organisms/Contact'
import LinkArea from '@/components/organisms/LinkArea'
import Footer from '@/components/organisms/Footer'
import BlogGet from '../components/BlogGet'
import Recommend from '@/components/organisms/Recommend'
import ScrollTopButton from '@/components/atoms/ScrollTopButton'

const BlogDetail = () => {
  return (
    <div className={styles.main}>
      <Header />
      <ArticleLayout id={1}>
        <BlogGet />
      </ArticleLayout>
      <ScrollTopButton />
      <Recommend />
      <Contact />
      <LinkArea />
      <Footer />
    </div>
  )
}

export default BlogDetail
