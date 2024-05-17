import React from 'react'

// next
import Link from 'next/link'
import Image from 'next/image'

// scss
import styles from './styles/ArticleBlockCard.module.scss'

// icon
import { SlCalender } from 'react-icons/sl'
import { TfiReload } from 'react-icons/tfi'

// hooks
import useAOS from '@/hooks/useAOS'

// props
export interface ArticleBlockCardProps {
  key: number
  link: string
  imgLink: string
  makeDate: string
  updateDate: string
  title: string
  tags: string[]
}

// date format function
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Intl.DateTimeFormat('ja-JP', options).format(date)
}

const ArticleBlockCard = ({
  key,
  link,
  imgLink,
  makeDate,
  updateDate,
  title,
  tags,
}: ArticleBlockCardProps) => {
  useAOS()
  return (
    <Link key={key} href={link} className={styles.card} data-aos='fade-up'>
      <div className={styles.imgBox}>
        <Image className={styles.image} src={imgLink} width={240} height={200} alt='記事画像' />
      </div>
      <div className={styles.main}>
        <div className={styles.dateBox}>
          <div className={styles.iconFlex}>
            <SlCalender className={styles.icon} />
            <p className={styles.date}>{formatDate(makeDate)}</p>
          </div>
          <div className={styles.iconFlex}>
            <TfiReload className={styles.icon} />
            <p className={styles.date}>{formatDate(updateDate)}</p>
          </div>
        </div>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.tagsBox}>
          {tags.map((tag, index) => (
            <p key={index} className={styles.tag}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ArticleBlockCard
