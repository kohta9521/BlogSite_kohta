import React, { FC } from "react";

// css import
import styles from "./styles/FlexBlogBox.module.css";
import BlogCard from "../molecules/BlogCard";


const FlexBlogBox: React.FC = () => {
  return (
    <div className={styles.flexBox}>
      <BlogCard
        id={1}
        imgUrl="/img/sample.png"
        madeDay="2023/08/04"
        reEditDay="2023/08/04"
        title="TypeScript環境でReact Hook Formのフォーム作成の基礎を学ぶ"
      />
    </div>
  )
}

export default FlexBlogBox;