import React, { FC } from "react";

// css import
import styles from "./styles/BlogCard.module.css";
import { StringLiteral } from "typescript";

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
        <img src={imgUrl} alt="blogCardImg" />
      </div>
      <div className={styles.textBox}>
        <div className={styles.dateBox}>
          <div className={styles.date1}>2023/08/04</div>
          <div className={styles.date1}>2023/08/04</div>
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