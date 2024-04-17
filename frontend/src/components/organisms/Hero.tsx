import React from 'react'

// scss
import styles from './styles/Hero.module.scss'

// components

// props
interface HeroProps {
  jaTitle: string
  enTitle: string
}

const Hero = ({ jaTitle, enTitle }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.jaTitle}>{jaTitle}</p>
        <h1 className={styles.enTitle}>{enTitle}</h1>
      </div>
    </div>
  )
}

export default Hero
