import React from 'react'

// next
import Link from 'next/link'
import Image from 'next/image'

// scss
import styles from './styles/UrlBox.module.scss'

// props
export type UrlBoxProps = {
  id: number
  link: string
  title: string
  image?: string
}

const UrlBox = ({ id, link, title, image = '/' }: UrlBoxProps) => {
  return (
    <Link className={styles.linkBox} href={link} key={id}>
      <div className={styles.leftBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.url}>{link}</p>
      </div>
      <div className={styles.rightBox}>
        <Image className={styles.image} src={image} width={300} height={100} alt='参考文献画像' />
      </div>
    </Link>
  )
}

export default UrlBox
