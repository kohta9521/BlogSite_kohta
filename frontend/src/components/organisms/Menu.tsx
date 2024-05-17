import React from 'react'

// scss
import styles from './styles/Menu.module.scss'
import MenuMainList from '../atoms/MenuMainList'

// components

interface MenuProps {
  isOpen: boolean
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h2 className={styles.menuTitle}>MainMenu</h2>
          <MenuMainList id={1} link='#about' text='About Me' />
          <MenuMainList id={1} link='#about' text='About Me' />
        </div>
        <div className={styles.centerBox}>
          <h2 className={styles.menuTitle}>PageMenu</h2>
        </div>
        <div className={styles.rightBox}></div>
      </div>
    </div>
  )
}

export default Menu
