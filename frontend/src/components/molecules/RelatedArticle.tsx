import React from 'react'

// next
import Link from 'next/link'
import Image from 'next/image'

// scss
import styles from './styles/RelatedArticle.module.scss'

// icons
import { IoIosArrowRoundForward } from 'react-icons/io'

// props
export interface RelatedArticleProps {
  id: number
  link: string
  img: string
  title: string
}

const RelatedArticle = ({ id, link, img, title }: RelatedArticleProps) => {
  return (
    <Link className={styles.relatedBox} key={id} href={link}>
      <div className={styles.leftBox}>
        <Image
          className={styles.img}
          src={img}
          width={200}
          height={100}
          alt='relatedArticleImage'
        />
      </div>
      <div className={styles.rightBox}>
        <h3 className={styles.articleTitle}>{title}</h3>
      </div>
      <IoIosArrowRoundForward className={styles.icon} />
    </Link>
  )
}

export default RelatedArticle
