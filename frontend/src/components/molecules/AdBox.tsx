import React from 'react'

// scss
import styles from './styles/AdBox.module.scss'

// random
import { getRandomAffiliate } from '../../utils/getRandomAffiliate'

const AdBox = () => {
  const { html } = getRandomAffiliate()
  return <div className={styles.adBox} dangerouslySetInnerHTML={{ __html: html }}></div>
}

export default AdBox
