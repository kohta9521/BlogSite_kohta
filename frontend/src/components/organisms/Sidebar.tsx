import React from 'react'

// scss
import styles from './styles/Sidebar.module.scss'

// components
import SidebarSection from '../molecules/SidebarSection'
import RecentArticle from '../atoms/RecentArticle'
import CategoryText from '../atoms/CategoryText'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarSection jaTitle='# 最新情報' enTitle='LATEST INFO'>
        <RecentArticle
          id={1}
          link='/blogs/articles/1'
          date='2024-04-01'
          title='Lambda関数(+Docker)でPythonのFastAPIを動かしてみよう'
        />
        <RecentArticle
          id={2}
          link='/blogs/articles/1'
          date='2024-04-01'
          title='Lambda関数(+Docker)でPythonのFastAPIを動かしてみよう'
        />
        <RecentArticle
          id={3}
          link='/blogs/articles/1'
          date='2024-04-01'
          title='Lambda関数(+Docker)でPythonのFastAPIを動かしてみよう'
        />
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
        <select>
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
