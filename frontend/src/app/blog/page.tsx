'use client'
import React from 'react'

// scss
import styles from './/Blog.module.scss'

// hooks
import useBlogData from '@/hooks/useGetAllArticles'

// components
import Header from '@/components/organisms/Header'
import Contact from '@/components/organisms/Contact'
import LinkArea from '@/components/organisms/LinkArea'
import Footer from '@/components/organisms/Footer'
import AllArticlePage from '@/components/templates/AllArticlePage'
import SearchDetail from '@/components/organisms/SearchDetail'
import ArticleBlockCard from '@/components/molecules/ArticleBlockCard'

const Blog = () => {
  const blogs = useBlogData()
  return (
    <div className={styles.blog}>
      <Header />

      <AllArticlePage
        id={1}
        enTitle='All Blogs'
        jaTitle='記事一覧・絞り込み'
        desc='こちらのページでは記事の一覧と記事の絞り込みが可能です。ジャンル別のタグ検索、投稿時期などによる絞り込み機能などがございます。'
      >
        <SearchDetail />
        <div className={styles.articleBox}>
          {blogs.map((blog) => (
            <ArticleBlockCard
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
      </AllArticlePage>
      <Contact />
      <LinkArea />
      <Footer />
    </div>
  )
}

export default Blog
