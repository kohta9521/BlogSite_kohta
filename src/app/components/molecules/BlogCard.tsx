import React, { FC } from "react";

// css import
import styles from "./BlogCard.module.css";

// interface type
// 二重になるのがあまり良くない気がする、、
interface BlogCardProps {
  id: number;
  date: string;
  imgUrl: string;
  title: string;
  tags: string;
  auther: string;
}



const BlogCard: React.FC<BlogCardProps> = ({ id, date, imgUrl, title, tags, auther }) => {
  return (
    <div className={styles.blogCardBox} key={id}>
      <div className={styles.leftBox}>
{/* date componets and blogImg componet */}
        <div className={styles.dateBox}>
          <p className={styles.dateText}>
            {date}
          </p>
        </div>
        <div className={styles.imgBox}>
          <img className={styles.img} src={imgUrl} alt="blogCardImg" />
        </div>
      </div>

      <div className={styles.textBox}>
{/*blogTitle comopnetns and BlogExplatin components and tag components and blogMoveButton components */}
        <div className={styles.titleBox}>
          <h2 className={styles.titleText}>
            {title}
          </h2>
        </div>
        <div className={styles.tagBox}>
          {tags}
        </div>
        <div className={styles.autherBox}>
          <p className={styles.autherText}>
            {auther}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;