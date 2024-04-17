import React from 'react'

// scss
import styles from '../styles/page.module.scss'

// components
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import TopLayout from '@/components/templates/TopLayout'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero jaTitle='# ブログ' enTitle='BLOG' />
      <TopLayout>
        <div>
          <h1>TopLayout</h1>
        </div>
      </TopLayout>
    </main>
  )
}
