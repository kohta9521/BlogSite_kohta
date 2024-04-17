import React from 'react'

// scss
import styles from './styles/Menu.module.scss'

// components

interface MenuProps {
  isOpen: boolean
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.container}></div>
    </div>
  )
}

export default Menu
