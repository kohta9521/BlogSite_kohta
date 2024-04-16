import React from 'react'

// scss
import styles from './styles/Header.module.scss'

// components
import Logo from '../atoms/Logo'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <Logo id={1} size='small' link='/' />
        </div>
      </div>
    </header>
  )
}

export default Header
