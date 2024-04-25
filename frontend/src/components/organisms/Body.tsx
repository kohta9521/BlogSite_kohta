import React from 'react'

// scss
import styles from './styles/Body.module.scss'

// cms
// import { client } from '../../libs/microcms'

const Body = () => {
  // エラーがある場合はエラーメッセージを表示
  //   if (error) return <p>エラーが発生しました: {error}</p>
  //   if (!blog) return <p>ブログの内容がありません。</p>

  return (
    <div className={styles.body}>
      <h1>sample</h1>
    </div>
  )
}

export default Body
