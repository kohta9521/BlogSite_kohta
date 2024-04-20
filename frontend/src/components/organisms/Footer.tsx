import React from 'react'

// scss
import styles from './styles/Footer.module.scss'

// components
import Logo from '../atoms/Logo'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <Logo id={2} link='/' size='medium' />
        </div>
        <div className={styles.rightBox}></div>
      </div>
    </div>
  )
}

export default Footer
