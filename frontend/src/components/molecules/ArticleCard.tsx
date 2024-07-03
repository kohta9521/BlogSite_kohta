import React from 'react'

// next
import Link from 'next/link'
import Image from 'next/image'

// scss
import styles from './styles/ArticleCard.module.scss'

// icon
import { SlCalender } from 'react-icons/sl'
import { TfiReload } from 'react-icons/tfi'

// hooks
import useAOS from '@/hooks/useAOS'

// props
export interface ArticleCardProps {
  key: string
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

const ArticleCard = ({
  key,
  link,
  imgLink,
  makeDate,
  updateDate,
  title,
  tags,
}: ArticleCardProps) => {
  useAOS()
  return (
    <Link key={key} href={link} className={styles.card} data-aos='fade-up'>
      <div className={styles.leftBox}>
        <Image className={styles.image} src={imgLink} width={240} height={144} alt='article' />
      </div>
      <div className={styles.rightBox}>
        <div className={styles.dateFlexBox}>
          <div className={styles.iconFlex}>
            <SlCalender className={styles.icon} />
            <p className={styles.date}>{formatDate(makeDate)}</p>
          </div>
          <div className={styles.iconFlex}>
            <TfiReload className={styles.icon} />
            <p className={styles.date}>{formatDate(updateDate)}</p>
          </div>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tagBox}>
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

export default ArticleCard
