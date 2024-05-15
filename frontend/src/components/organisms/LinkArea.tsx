import React from 'react'

// scss
import styles from './styles/LinkArea.module.scss'

// components
import BannerBox from '../molecules/BannerBox'

// components

const LinkArea = () => {
  return (
    <div className={styles.linkArea}>
      <div className={styles.container}>
        <BannerBox />
        <BannerBox />
      </div>
    </div>
  )
}

export default LinkArea
