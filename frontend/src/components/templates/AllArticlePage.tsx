import React from 'react'

// scss
import styles from './styles/AllArticlePage.module.scss'

// props
export type AllArticlePageProps = {
  id: number
  enTitle: string
  jaTitle: string
  desc: string
  children: React.ReactNode
}

const AllArticlePage = ({ id, enTitle, jaTitle, desc, children }: AllArticlePageProps) => {
  return (
    <div className={styles.main} key={id}>
      <div className={styles.hero}>
        <p className={styles.jatitle}>{jaTitle}</p>
        <h1 className={styles.entitle}>{enTitle}</h1>
        <p className={styles.desc}>{desc}</p>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default AllArticlePage
