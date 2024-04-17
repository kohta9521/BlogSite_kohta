import React from 'react'
import Link from 'next/link'

// scss
import styles from './styles/RecentArticle.module.scss'

// props
export interface RecentArticleProps {
  id: number
  link: string
  date: string
  title: string
}

export const RecentArticle = ({ id, link, date, title }: RecentArticleProps) => {
  return (
    <Link className={styles.box} key={id} href={link}>
      <p className={styles.date}>{date}</p>
      <p className={styles.title}>{title}</p>
    </Link>
  )
}

export default RecentArticle
