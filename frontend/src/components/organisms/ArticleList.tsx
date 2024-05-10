'use client'
import React from 'react'

// hooks
import useBlogData from '@/hooks/useGetAllArticles'

// scss
// import styles from './styles/ArticleLIst.module.scss'

// components
import ArticleCard from '../molecules/ArticleCard'

const ArticleList = () => {
  const blogs = useBlogData()

  return (
    <div>
      <h1># 記事一覧</h1>
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
