import React from 'react'

// scss
import styles from './styles/SidebarSection.module.scss'

// props
interface SidebarSectionProps {
  jaTitle: string
  enTitle: string
  children: React.ReactNode
}

const SidebarSection = ({ jaTitle, enTitle, children }: SidebarSectionProps) => {
  return (
    <div className={styles.sectionBox}>
      <div className={styles.titleBox}>
        <p className={styles.jaTitle}>{jaTitle}</p>
        <h2 className={styles.enTitle}>{enTitle}</h2>
      </div>
      <div className={styles.flexBox}>
        <div className={styles.leftBox}>
          <span className={styles.border}></span>
        </div>
        <div className={styles.rightBox}>{children}</div>
      </div>
    </div>
  )
}

export default SidebarSection
