import React from 'react'
import Link from 'next/link'

// scss
import styles from './styles/RecentArticle.module.scss'

// props
export interface RecentArticleProps {
  key: number
  id: string
  link: string
  date: string
  title: string
}

export const RecentArticle = ({ id, key, link, date, title }: RecentArticleProps) => {
  return (
    <Link className={styles.box} id={id} key={key} href={link}>
      <p className={styles.date}>{date}</p>
      <p className={styles.title}>{title}</p>
    </Link>
  )
}

export default RecentArticle
