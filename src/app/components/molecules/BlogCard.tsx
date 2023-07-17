import React, { FC } from "react";

// css import
import styles from "./BlogCard.module.css";
import DateText from "../atoms/DateText";

// interface type
// 二重になるのがあまり良くない気がする、、
interface BlogCardProps {
  id: number;
}



const BlogCard: React.FC = () => {
  return (
    <div className={styles.blogCardBox}>
      <div className={styles.imgBox}>
{/* date componets and blogImg componet */}
        <DateText id={1} dateText="2023-07-17" />
      </div>
      <div className={styles.textBox}>
{/*blogTitle comopnetns and BlogExplatin components and tag components and blogMoveButton components */}
      </div>
    </div>
  )
}

export default BlogCard;