import React from 'react'

// scss
import styles from './Blog.module.scss'
import Header from '@/components/organisms/Header'

// components

const Blogs = () => {
  return (
    <div className={styles.blog}>
      <Header />
    </div>
  )
}

export default Blogs
