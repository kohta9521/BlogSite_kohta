import React from 'react'

// scss
import styles from './styles/SubPageSecTitle.module.scss'

// props
export type SubPageSecTitleProps = {
  id: number
  title: string
}

const SubPageSecTitle = ({ id, title }: SubPageSecTitleProps) => {
  return (
    <div className={styles.box} key={id}>
      <span className={styles.circle}></span>
      <p className={styles.text}>{title}</p>
    </div>
  )
}

export default SubPageSecTitle
