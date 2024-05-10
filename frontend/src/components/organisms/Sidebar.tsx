import React from 'react'

// scss
import styles from './styles/Sidebar.module.scss'

// components
import SidebarSection from '../molecules/SidebarSection'
import RecentArticle from '../atoms/RecentArticle'
import CategoryText from '../atoms/CategoryText'

// client

// APIから最新記事を3件取得
export async function getServerSideProps() {
  try {
    const response = await client.getList({
      endpoint: 'blog',
      queries: { limit: 3 }, // 最新3件のみ取得
    })
    console.log('API response:', response.contents) // データの構造をログ出力
    return { props: { articles: response.contents || [] } } // エラー時に空の配列を設定
  } catch (error) {
    console.error('Fetching articles failed:', error)
    return { props: { articles: [] } } // エラー時は空の配列を返す
  }
}

const Sidebar = ({ articles }: any) => {
  // articles が未定義の場合は空の配列を設定
  const safeArticles = articles || []

  return (
    <div className={styles.sidebar}>
      <SidebarSection jaTitle='# 最新情報' enTitle='LATEST INFO'>
        {safeArticles.map((article: any) => (
          <RecentArticle
            key={article.id}
            id={article.id}
            link={`/blogs/articles/${article.id}`}
            date={new Date(article.publishedAt).toLocaleDateString()}
            title={article.title}
          />
        ))}
        {/* <RecentArticle
          id={1}
          link='/blogs/articles/1'
          date='2024-04-01'
          title='Lambda関数(+Docker)でPythonのFastAPIを動かしてみよう'
        /> */}
      </SidebarSection>
      <SidebarSection jaTitle='# カテゴリー' enTitle='CATEGORY'>
        <CategoryText id={1} link='/category' text='Frontend' />
        <CategoryText id={1} link='/category' text='Frontend' />
        <CategoryText id={1} link='/category' text='Frontend' />
        <CategoryText id={1} link='/category' text='Frontend' />
        <CategoryText id={1} link='/category' text='Frontend' />
        <CategoryText id={1} link='/category' text='Frontend' />
        <CategoryText id={1} link='/category' text='Frontend' />
      </SidebarSection>
      <SidebarSection jaTitle='# アーカイブ' enTitle='ARCHIVE'>
        <select className={styles.selectTag}>
          <option>2024年4月</option>
          <option>2024年3月</option>
          <option>2024年2月</option>
          <option>2024年1月</option>
          <option>2023年12月</option>
          <option>2023年11月</option>
          <option>2023年10月</option>
          <option>2023年9月</option>
          <option>2023年8月</option>
          <option>2023年7月</option>
        </select>
      </SidebarSection>
    </div>
  )
}

export default Sidebar
