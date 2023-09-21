import React, { FC } from 'react'

// css import
import styles from './styles/CategoryTag.module.css'

// props type
type Props = {
  id: number
  tagsNumber: number
}

// dataset
import { tags } from '../../data/List'

// なんの配列を表示するか複数の値を取得して表示

const CategoryTag: React.FC<Props> = ({ id, tagsNumber }) => {
  const i: number = tagsNumber

  return (
    <a className={styles.tags} href={tags[i].url}>
      <img className={styles.img} src={tags[i].img} alt="iconImg" />
      {tags[i].text}
    </a>
  )
}

export default CategoryTag
