import React from 'react'

// scss
import styles from './styles/Footer.module.scss'
import Logo from '../atoms/Logo'

// components


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.logoBox}>
                <Logo
                    id={2}
                    link='/'
                    size='small'
                />
            </div>
            <div className={styles.menuBox}>
                menuBox
            </div>
        </div>
    )
}

export default Footer