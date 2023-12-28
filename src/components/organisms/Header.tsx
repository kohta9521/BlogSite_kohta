import React from 'react'

// scss
import styles from "./styles/Header.module.scss"

// components
import Logo from '../atoms/Logo'
import List from '../atoms/List'

const Header = () => {

    return (
        <div className={styles.header}>
            {/* Logo */}
            <div className={styles.logoBox}>
                <Logo id={1} link='/' size='medium' />
            </div>
            {/* Menu */}
            <div className={styles.menuBox}>
                <List id={1} link='/' text='list' size='medium' color='black' />
            </div>
        </div>
    )
}


export default Header