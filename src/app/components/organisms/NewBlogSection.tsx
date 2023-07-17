import React, { FC } from "react";

// css import
import styles from "./NewBlogSection.module.css";
import Title from "../atoms/Title";
import BlogCard from "../molecules/BlogCard";


const NewBlogSection: React.FC = () => {
  return (
    <div className={styles.newBlogBox}>
      <Title id={1} text="最新記事" link="#blog" size="medium"  />
      <BlogCard />
    </div>
  )
}

export default NewBlogSection;