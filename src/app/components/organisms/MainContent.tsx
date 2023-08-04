import React, { FC } from "react";

// css import
import styles from "./styles/MainContent.module.css";
import TopBlogCard from "../molecules/TopBlogCard";


const MainContent: React.FC = () => {
  return (
    <div className={styles.main}>
      <TopBlogCard id={1} imgUrl={"/img/sampleImg.png"} title="TypeScript環境でReact Hook Formのフォーム作成の基礎を学ぶ" date="2023年7月24日 更新" text="アプリケーションを構築する際にページネーションや列の並び替えの機能を持ったライブラリを利用したいけどデザインは自分達で行いたいなと思った経験はないですか？そんな人のためのライブラリが TanStack Table です。TanStack Table は Headless UI なのでテーブルに必要な基本機能を備えながらデザインは各自で行うことができます。" />
    </div>
  )
}

export default MainContent;