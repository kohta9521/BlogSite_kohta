import React from 'react'

// scss
import styles from './styles/ArticleLayout.module.scss'

// props

export interface ArticleLayoutProps {
  id: number
  children: React.ReactNode
}

const ArticleLayout = ({ id, children }: ArticleLayoutProps) => {
  return (
    <div className={styles.main} key={id}>
      <div className={styles.centerBox}>
        <div className={styles.mainArticleBox}>{children}</div>
      </div>
    </div>
  )
}

export default ArticleLayout
