import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// scss
import styles from './styles/RecommendArticle.module.scss'

// props
export interface RecommendArticleProps {
  id: number
  link: string
  img: string
  title: string
}

const RecommendArticle = ({ id, link, img, title }: RecommendArticleProps) => {
  return (
    <Link className={styles.recommendBox} key={id} href={link}>
      <div className={styles.leftBox}>
        <Image
          className={styles.img}
          src={img}
          width={200}
          height={100}
          alt='recommendArticleImage'
        />
      </div>
      <div className={styles.rightBox}>
        <h3 className={styles.articleTitle}>{title}</h3>
      </div>
    </Link>
  )
}

export default RecommendArticle
