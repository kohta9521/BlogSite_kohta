import React from 'react'

// scss
import styles from './styles/BannerBox.module.scss'

// utils
import { getRandomBanner } from '@/utils/getRandomBanner'

const BannerBox = () => {
  const { html } = getRandomBanner()

  return <div className={styles.bannerBox} dangerouslySetInnerHTML={{ __html: html }}></div>
}

export default BannerBox
