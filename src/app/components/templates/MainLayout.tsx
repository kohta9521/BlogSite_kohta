'use client'
import React, { FC } from 'react'

// css import
import styles from './styles/Mainlayout.module.css'
import Header from '../organisms/Header'
import MainContent from '../organisms/MainContent'
import Footer from '../organisms/Footer'

const MainLayout: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
