import React, { FC } from "react";

// css import
import styles from "./styles/MainContent.module.css";
import TopBlogCard from "../molecules/TopBlogCard";
import FlexBlogBox from "./FlexBlogBox";
import TagsBox from "./TagsBox";



const MainContent: React.FC = () => {
  return (
    <div className={styles.main}>
      {/* propsでtagの表示内容を複数取得 */}
      <TopBlogCard 
        id={1}
        blogLink="/pages/blog"
        imgUrl={"/img/sampleImg.png"}
        title="TypeScriptでReact Hook Formのフォーム作成の基礎を学ぶ"
        date="2023年7月24日 更新"
        text="アプリケーションを構築する際にページネーションや列の並び替えの機能を持ったライブラリを利用したいけどデザインは自分達で行いたいなと思った経験はないですか？そんな人のためのライブラリが TanStack Table です。TanStack Table は Headless UI なのでテーブルに必要な基本機能を備えながらデザインは各自で行うことができます。"
      />
      <FlexBlogBox />
    </div>
  )
}

export default MainContent;