import React from 'react'

// scss
import styles from './styles/Copyright.module.scss'

const Copyright = () => {
  return (
    <div className={styles.copyBox}>
      <p className={styles.copy}>&copy; 2024 Kohta Tech Blog Site kohta inc.</p>
    </div>
  )
}

export default Copyright
