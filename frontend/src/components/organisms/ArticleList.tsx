'use client'
import React from 'react'

// hooks
import useBlogData from '@/hooks/useGetAllArticles'
import useDesignationBlogData from '@/hooks/useDesignationArticles'

// scss
import styles from './styles/ArticleLIst.module.scss'

// components
import ArticleCard from '../molecules/ArticleCard'

// loading animation
import { Puff } from '@agney/react-loading'

const ArticleList = () => {
  const blogs = useBlogData()
  const blogIds = ['ygozrkrtbw9', 'ccraa7de1', 'gni7b8zptul']
  const recommendBlogs = useDesignationBlogData({ ids: blogIds })

  // データがまだロードされていない場合はローディングアニメーションを表示
  if (!blogs.length || !recommendBlogs.length) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Puff width='100px' height='100px' className={styles.loader} />
      </div>
    )
  }

  return (
    <div>
      <div className={styles.recommendBox}>
        <h1 className={styles.sectionTitle}># おすすめ記事</h1>
        <div>
          {recommendBlogs.map((blog) => (
            <ArticleCard
              key={1}
              link={`/blog/${blog.id}`}
              imgLink={blog.topImage}
              makeDate={blog.createdAt}
              updateDate={blog.updatedAt}
              title={blog.title}
              tags={blog.tags.map((tag) => tag.tag)}
            />
          ))}
        </div>
      </div>
      <h1 className={styles.sectionTitle}># 記事一覧</h1>
      <div>
        {blogs.map((blog) => (
          <ArticleCard
            key={1}
            link={`/blog/${blog.id}`}
            imgLink={blog.topImage}
            makeDate={blog.createdAt}
            updateDate={blog.updatedAt}
            title={blog.title}
            tags={blog.tags.map((tag) => tag.tag)}
          />
        ))}
      </div>
    </div>
  )
}

export default ArticleList
