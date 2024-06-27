'use client'
import React from 'react'

// hooks
// import useDesignationBlogData from '@/hooks/useDesignationArticles'

// scss
import styles from './styles/Recommend.module.scss'

// components
// import RelatedArticle from '../molecules/RelatedArticle'

const Recommend = () => {
  // const blogIds = ['ygozrkrtbw9', 'ccraa7de1', 'gni7b8zptul']
  // const recommendBlogs = useDesignationBlogData({ ids: blogIds })
  return (
    <div className={styles.recommend}>
      <div className={styles.container}>
        {/* {recommendBlogs.map((blog) => (
          <RelatedArticle
            key='1'
            link={`/blog/${blog.id}`}
            img={blog.topImage}
            title={blog.title}
          />
        ))} */}
      </div>
    </div>
  )
}

export default Recommend
