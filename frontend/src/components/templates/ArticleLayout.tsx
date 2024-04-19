import React from 'react'

// scss
import styles from './styles/ArticleLayout.module.scss'

// components
import RecommendArticle from '../molecules/RecommendArticle'
import TableBox from '../molecules/TableBox'
import AdBox from '../molecules/AdBox'

// icons
import { CiHeart } from 'react-icons/ci'
import { TiSocialFacebook } from 'react-icons/ti'
import { TiSocialTwitter } from 'react-icons/ti'

// props
export interface ArticleLayoutProps {
  id: number
  children: React.ReactNode
}

const ArticleLayout = ({ id, children }: ArticleLayoutProps) => {
  return (
    <div className={styles.main} key={id}>
      <div className={styles.leftBox}>
        {/* いいねの登録 */}
        <CiHeart className={styles.goodIcon} />
        <p className={styles.goodNumber}>22</p>
        {/* ブログ記事の共有 */}
        <TiSocialFacebook className={styles.snsIcon} />
        <TiSocialTwitter className={styles.snsIcon} />
      </div>
      <div className={styles.centerBox}>
        <div className={styles.mainArticleBox}>{children}</div>
        <div className={styles.advertisementBox}>
          <AdBox />
          <AdBox />
        </div>
        <div className={styles.recommendBox}>
          <p className={styles.title}>関連記事</p>
          <RecommendArticle id={1} link='/' img='/images/1.jpg' title='記事タイトル' />
        </div>
      </div>
      <div className={styles.rightBox}>
        <AdBox />
        <TableBox />
      </div>
    </div>
  )
}

export default ArticleLayout
