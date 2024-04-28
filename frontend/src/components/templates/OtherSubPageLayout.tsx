import React from 'react'

// scss
import styles from './styles/OtherSubPageLayout.module.scss'

// components
import Header from '../organisms/Header'

// props
export type OtherSubPageLayoutProps = {
  id: number
  title: string
  children: React.ReactNode
}

const OtherSubPageLayout = ({ id, title, children }: OtherSubPageLayoutProps) => {
  return (
    <div key={id} className={styles.layout}>
      <Header />
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default OtherSubPageLayout
