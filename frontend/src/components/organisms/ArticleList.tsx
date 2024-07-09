'use client'
import React from 'react'

// hooks
import useBlogData from '@/hooks/useGetAllArticles'
import useDesignationBlogData from '@/hooks/useDesignationArticles'
import useAOS from '@/hooks/useAOS'

// scss
import styles from './styles/ArticleLIst.module.scss'

// components
import ArticleCard from '../molecules/ArticleCard'

// loading animation
import { Puff } from '@agney/react-loading'
import Link from 'next/link'

const ArticleList = () => {
  const blogs = useBlogData()
  const blogIds = ['ygozrkrtbw9', 'ccraa7de1', 'gni7b8zptul']
  const recommendBlogs = useDesignationBlogData({ ids: blogIds })

  // AOSの初期化
  useAOS()

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
    <div className={styles.main}>
      <div className={styles.recommendBox}>
        <h1 className={styles.sectionTitle} data-aos='fade-up'>
          # おすすめ記事
        </h1>
        <div>
          {recommendBlogs.map((blog) => (
            <ArticleCard
              key={blog.title}
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
      <h1 className={styles.sectionTitle} data-aos='fade-up'>
        # 記事一覧
      </h1>
      <div className={styles.blogBox}>
        {blogs.slice(0, 10).map(
          (
            blog, // 10件のみ表示
          ) => (
            <ArticleCard
              key={blog.title}
              link={`/blog/${blog.id}`}
              imgLink={blog.topImage}
              makeDate={blog.createdAt}
              updateDate={blog.updatedAt}
              title={blog.title}
              tags={blog.tags.map((tag) => tag.tag)}
            />
          ),
        )}
      </div>
      <div>
        <Link className={styles.link} href='/blog' data-aos='fade-up'>
          <p className={styles.text}>ブログ一覧ページに移動</p>
        </Link>
      </div>
    </div>
  )
}

export default ArticleList
