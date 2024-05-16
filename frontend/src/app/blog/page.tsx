import React from 'react'

// scss
import styles from './/Blog.module.scss'

// components
import Header from '@/components/organisms/Header'
import Contact from '@/components/organisms/Contact'
import LinkArea from '@/components/organisms/LinkArea'
import Footer from '@/components/organisms/Footer'
import AllArticlePage from '@/components/templates/AllArticlePage'
import SearchDetail from '@/components/organisms/SearchDetail'

const Blog = () => {
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
        <h2 className={styles.articles}>articles</h2>
      </AllArticlePage>
      <Contact />
      <LinkArea />
      <Footer />
    </div>
  )
}

export default Blog
