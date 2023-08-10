import React, { FC } from "react";

// css import
import styles from "./blogPage.module.css";
import Bloglayout from "@/app/components/templates/BlogLayout";
import ArticleDate from "@/app/components/atoms/ArticleDate";
import CategoryTag from "@/app/components/atoms/CategoryTag";


const BlogPage: React.FC = () => {
  return (
    <>
        <Bloglayout>
          <img  className={styles.topImg} src="/img/sampleImg.png" alt="blog top img" />
          <h1 className={styles.title}>
              TypeScriptでReact Hook Formのフォーム作成の基礎を学ぶ
          </h1>
          <div className={styles.dateBox}>
            <ArticleDate id={1} imgBool={false} date="2023/08/10" size="medium" />
            <ArticleDate id={1} imgBool={true} date="2023/08/14" size="medium" />
          </div>
          <div className={styles.tagsBox}>
            <CategoryTag id={0} tagsNumber={0} />
            <CategoryTag id={0} tagsNumber={15} />
          </div>
        </Bloglayout>
    </>
  )
}

export default BlogPage;