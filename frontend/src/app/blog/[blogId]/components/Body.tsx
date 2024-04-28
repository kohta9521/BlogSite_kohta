'use client'
import React from 'react'

// scss
import styles from './Body.module.scss'

import { useRouter } from 'next/navigation'

const Body = () => {
  const router = useRouter()
  console.log(router)

  return (
    <div className={styles.body}>
      <p>hyouzisarenai.....</p>
    </div>
  )
}

export default Body
