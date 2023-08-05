import React, { FC } from "react";

// css import
import styles from "./styles/BlogCard.module.css";
import { StringLiteral } from "typescript";
import ArticleDate from "../atoms/ArticleDate";

// props type
type Props = {
  id: number;
  imgUrl: string;
  madeDay: string;
  reEditDay: string;
  title: string;
  // tags: number[];
}


const BlogCard: React.FC<Props> = ({ id, imgUrl, madeDay, reEditDay, title }) => {
  return (
    <div className={styles.blogCard} key={id}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={imgUrl} alt="blogCardImg" />
      </div>
      <div className={styles.textBox}>
        <div className={styles.dateBox}>
          <ArticleDate
            id={1}
            imgBool={true}
            date="2023/08/05"
            size="small"
          />
          <ArticleDate
            id={2}
            imgBool={false}
            date="2023/08/05"
            size="small"
          />
        </div>
        <h2 className={styles.blogTitle}>
          {title}
        </h2>
        <div className={styles.tagBox}>
          tags
        </div>
      </div>
    </div>
  )
}

export default BlogCard;