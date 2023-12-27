'use client'
import React, { useState } from 'react'

// scss
import styles from './styles/Header.module.scss'
import { AnimatePresence } from 'framer-motion';

// components
import Nav from '../molecules/Nav';

const Header = () => {
    const [ isActive, setIsActive ] = useState(false);

    return (
        <>
            <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    )
}


export default Header