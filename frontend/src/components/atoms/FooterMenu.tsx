import React from 'react'

// next
import Link from 'next/link'

// scss
import styles from './styles/FooterMain.module.scss'

// props
export type FooterMenuProps = {
  type?: 'default' | 'small'
  id: number
  link: string
  text: string
}

const FooterMenu = ({ type = 'default', id, link, text }: FooterMenuProps) => {
  return (
    <Link href={link} className={styles.linkBox} passHref key={id}>
      <a className={`${styles.linkBox} ${styles[type]}`} href={link}>
        <p className={styles.text}>{text}</p>
      </a>
    </Link>
  )
}

export default FooterMenu
