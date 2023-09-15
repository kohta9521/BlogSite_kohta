'use client'
import styles from '../styles/page.module.css'
import Page from './pages'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* pagesディレクトリ内のファイル　ルーティング設定のため */}
      <Page />
    </main>
  )
}
