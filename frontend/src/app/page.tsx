import React from 'react'

// scss
import styles from '../styles/page.module.scss'

// components
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import TopLayout from '@/components/templates/TopLayout'
import Contact from '@/components/organisms/Contact'
import LinkArea from '@/components/organisms/LinkArea'
import Footer from '@/components/organisms/Footer'
import ArticleList from '@/components/organisms/ArticleList'
// import Genre from '@/components/organisms/Genre'

// blog get fn

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero jaTitle='# kohta9521 テックブログ' enTitle='KOHTA9521 TECH BLOG' />
      <TopLayout>
        <ArticleList />
        {/* <Genre /> */}
      </TopLayout>
      <Contact />
      <LinkArea />
      <Footer />
    </main>
  )
}
