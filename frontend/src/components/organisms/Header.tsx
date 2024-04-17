import React from 'react'

// scss
import styles from './styles/Header.module.scss'

// components
import Logo from '../atoms/Logo'
import HamburgerBtn from '../molecules/HamburgerBtn'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <Logo id={1} size='small' link='/' />
        </div>
        <HamburgerBtn />
      </div>
    </header>
  )
}

export default Header
