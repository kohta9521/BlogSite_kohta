'use client'
import React, { FC, useState } from 'react'

// css import
import styles from './styles/Header.module.css'
// import ToggleButton from "../atoms/ToggleButton";
// import Navigation from "../atoms/Navigation";
import Logo from '../atoms/LogoItem'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const toggleFunction = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo id={1} size="medium" />
        {/* <ToggleButton
          open={open}
          controls="navigation"
          label="メニューを開きます"
          onClick={toggleFunction}
        />
        <Navigation id="navigation" open={open} /> */}
      </div>
    </div>
  )
}

export default Header
