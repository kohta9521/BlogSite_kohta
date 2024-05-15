import React from 'react'

// scss
import styles from './styles/SubPageTitle.module.scss'

// props
export type SubPageTitleProps = {
  id: number
  enTitle: string
  jaTitle: string
}

const SubPageTitle = ({ id, enTitle, jaTitle }: SubPageTitleProps) => {
  return (
    <div className={styles.titleBox} key={id}>
      <p className={styles.en}>{enTitle}</p>
      <h2 className={styles.ja}>{jaTitle}</h2>
    </div>
  )
}

export default SubPageTitle
