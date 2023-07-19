import React, { FC } from "react";

// css import
import styles from "./NewBlogSection.module.css";
import Title from "../atoms/Title";
import BlogCard from "../molecules/BlogCard";


// map関数を使用した繰り返し幸運でこの中で配列を作成して
// それを表示させるのではいけないのか？

// しかしそれだとバックエンドとの接続でいちいち配列内にぶち込む必要、現存のコードだと不可能


// とりあえず配列の中に全ての最新記事の内容を保管してみる
// バックエンドの実装はその後w
type NewBlogContent = {
  id: number;
  date: string;
  imgUrl: string;
  titleText: string;
  explainText: string;
  tag:string;
}

const NewBlogSection: React.FC = () => {

// ブログ内容を格納する配列
// 後々map関数で全てを出力
  const newBlogContent: NewBlogContent[] = [
    {
      id: 1,
      date: "2021-07-17",
      imgUrl: "https://placehold.jp/150x150.png",
      titleText: "ブログタイトル",
      explainText: "ブログの説明文",
      tag: "ブログタグ"
    },
  ]

  return (
    <div className={styles.newBlogBox}>
      <Title id={1} text="最新記事" link="#blog" size="medium"  />
      {
        newBlogContent.map((item, i) => (
          // ここにブログカードを格納、もしくはそれ配下の子コンポーネントを直接記述
          // 製作中
          <div className={styles.blogCard}>
            {item.titleText}
          </div>
        ))
      }
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  )
}

export default NewBlogSection;