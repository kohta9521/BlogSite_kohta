import React from 'react'

// next
import Image from 'next/image'
import Link from 'next/link'

// scss
import styles from './styles/Logo.module.scss'

// props
export interface LogoProps {
  id: number
  link: string
  size?: 'small' | 'medium' | 'large'
}

const Logo = ({ id, link, size = 'medium' }: LogoProps) => {
  return (
    <Link key={id} href={link} className={`${styles.logoLink}`}>
      <Image
        className={`${styles.logoImage} ${styles[size]}`}
        src='/images/logo/bg-white-logo.png'
        alt='logo'
        width={205}
        height={91}
      />
    </Link>
  )
}

export default Logo
