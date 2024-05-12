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

// blog get fn

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero jaTitle='# 光太 テックブログ' enTitle='KOHTA TECH BLOG' />
      <TopLayout>
        <ArticleList />
      </TopLayout>
      <Contact />
      <LinkArea />
      <Footer />
    </main>
  )
}
