import React from 'react'

// scss
import styles from './styles/SubPageLayout.module.scss'

// components
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import LinkArea from '../organisms/LinkArea'
import Contact from '../organisms/Contact'

// props
export type SubPageLayoutProps = {
  id: number
  enTitle: string
  jaTitle: string
  desc: string
  children: React.ReactNode
}

const SubPageLayout = ({ id, enTitle, jaTitle, desc, children }: SubPageLayoutProps) => {
  return (
    <div className={styles.layout} key={id}>
      <Header />
      <div className={styles.hero}>
        <div className={styles.leftBox}>
          <h1 className={styles.enTitle}>{enTitle}</h1>
          <p className={styles.jaTitle}>{jaTitle}</p>
        </div>
        <div className={styles.rightBox}>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.content}>{children}</div>
      </div>
      <Contact />
      <LinkArea />
      <Footer />
    </div>
  )
}

export default SubPageLayout
