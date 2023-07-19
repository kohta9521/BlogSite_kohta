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
  title: string;
  // ぶっちゃけここを配列にしたい
  tags: string;
  auther: string;
}

const NewBlogSection: React.FC = () => {

  const BlogContents: NewBlogContent[] = [
    {
      id: 1,
      date: "2021/01/01",
      imgUrl: "",
      title: "test",
      tags: "test",
      auther: "kohta",
    },
  ]


  return (
    <div className={styles.newBlogBox}>
      <Title id={1} text="最新記事" link="#blog" size="medium"  />
      {
        BlogContents.map((item, i) => {
          return (
            <BlogCard
              id={item.id}
              date={item.date}
              imgUrl={item.imgUrl}
              title={item.title}
              tags={item.tags}
              auther={item.auther}
            />
          )
        })
      }
    </div>
  )
}

export default NewBlogSection;