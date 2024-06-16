import React from 'react'

// next
import Link from 'next/link'

// scss
import styels from './styles/FooterMenuSub.module.scss'

// props
export type FooterMenuSubProps = {
  id: number
  link: string
  text: string
}

const FooterMenuSub = ({ id, link, text }: FooterMenuSubProps) => {
  return (
    <Link className={styels.link} href={link} key={id}>
      <p className={styels.text}>{text}</p>
    </Link>
  )
}

export default FooterMenuSub
