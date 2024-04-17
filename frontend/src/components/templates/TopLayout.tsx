import React from 'react'

// scss
import styles from './styles/TopLayout.module.scss'

// components
import Sidebar from '../organisms/Sidebar'

// props
interface TopLayoutProps {
  children: React.ReactNode
}

const TopLayout = ({ children }: TopLayoutProps) => {
  return (
    <div className={styles.topLayout}>
      <div className={styles.leftArticleBox}>{children}</div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </div>
  )
}
export default TopLayout
