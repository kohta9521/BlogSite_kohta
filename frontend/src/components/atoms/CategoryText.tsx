import React from 'react'

// next
import Link from 'next/link'

// scss
import styles from './styles/CategoryText.module.scss'

// props
export interface CategoryTextProps {
  id: number
  link: string
  text: string
}

const CategoryText = ({ id, link, text }: CategoryTextProps) => {
  return (
    <Link key={id} href={link} className={styles.box}>
      <span className={styles.border}></span>
      <p className={styles.text}>{text}</p>
    </Link>
  )
}

export default CategoryText
