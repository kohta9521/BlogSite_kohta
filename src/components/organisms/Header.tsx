import React from 'react'

// scss
import styles from "./styles/Header.module.scss"

// components
import Logo from '../atoms/Logo'

const Header = () => {

    return (
        <div className={styles.header}>
            {/* Logo */}
            <div className={styles.logoBox}>
                <Logo id={1} link='/' size='medium' />
            </div>
            {/* Menu */}
            <div className={styles.menuBox}>

            </div>
        </div>
    )
}


export default Header