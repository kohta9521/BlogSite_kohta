import React from 'react'

// styles
import styles from './styles/FooterBox.module.scss'

// types
export type FooterBoxProps = {
  id: number
  children: React.ReactNode
}

const FooterBox = ({ id, children }: FooterBoxProps) => {
  return (
    <div key={id} className={styles.box}>
      {children}
    </div>
  )
}

export default FooterBox
