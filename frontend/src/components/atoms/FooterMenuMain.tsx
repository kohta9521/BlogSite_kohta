import React from 'react'

// next
import Link from 'next/link'

// scss
import styles from './styles/FooterMenuMain.module.scss'

// props
export type FooterMenuMainProps = {
  id: number
  link: string
  text: string
}

const FooterMenuMain = ({ id, link, text }: FooterMenuMainProps) => {
  return (
    <Link className={styles.link} key={id} href={link}>
      <p className={styles.text}>{text}</p>
    </Link>
  )
}

export default FooterMenuMain
