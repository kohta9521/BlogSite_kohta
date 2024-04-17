import React from 'react'
import Link from 'next/link'

// scss import
import styles from './styles/ContactCard.module.scss'

// icon
import { PiArrowRightThin } from 'react-icons/pi'

// props
export interface ContactCardProps {
  id: number
  jaTitle: string
  enTitle: string
  desc: string
  link: string
}

const ContactCard = ({ id, jaTitle, enTitle, desc, link }: ContactCardProps) => {
  return (
    <div className={styles.card} key={id}>
      <p className={styles.jaTitle}>{jaTitle}</p>
      <h2 className={styles.enTitle}>{enTitle}</h2>
      <p className={styles.desc}>{desc}</p>
      <Link className={styles.link} href={link}>
        <p className={styles.linkText}>View More</p>
        <PiArrowRightThin className={styles.icon} />
      </Link>
    </div>
  )
}

export default ContactCard
