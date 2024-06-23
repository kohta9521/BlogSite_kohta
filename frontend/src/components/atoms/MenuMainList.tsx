import React from 'react'
import Link from 'next/link'

// scss
import styles from './styles/MenuMainList.module.scss'

// props
export type MenuMainListProps = {
  id: number
  link: string
  text: string
}

const MenuMainList = ({ id, link, text }: MenuMainListProps) => {
  return (
    <Link key={id} href={link} className={styles.menu}>
      <p className={styles.text}>{text}</p>
    </Link>
  )
}

export default MenuMainList