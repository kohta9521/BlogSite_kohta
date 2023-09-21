import React, { FC, ReactNode } from 'react'

// css import
import styles from './styles/Bloglayout.module.css'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

interface BlogLayoutProps {
  children: ReactNode
}

const Bloglayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className={styles.blog}>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

export default Bloglayout
